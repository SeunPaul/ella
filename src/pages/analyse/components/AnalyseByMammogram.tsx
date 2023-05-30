import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import FormInput from "../../../components/form/formInput/FormInput";
import ImageUpload from "../../../components/ui/page/ImageUpload";
import FormButton from "../../../components/form/formButton/FormButton";
import PopModal from "../../../components/ui/modal/PopModal";
import Button from "../../../components/ui/button/Button";
import scan from "../../../assets/images/scan.gif";
import note from "../../../assets/icons/note.svg";
import { ImageType } from "../../../components/ui/page/types";
import notify from "../../../utils/notify";

function AnalyseByMammogram() {
  const [submitting, setSubmitting] = useState(false);
  const [image, setImage] = useState<ImageType | null>(null);
  const [showResult, setShowResult] = useState("");
  const { register, handleSubmit, formState } = useForm();

  const navigate = useNavigate();

  const onAnalyse: SubmitHandler<FieldValues> = () => {
    if (!image) {
      notify("error", "Please upload an image");
    } else {
      setSubmitting(true);
      const formData = new FormData();

      formData.append("picture", image.file);

      fetch("http://127.0.0.1:8500/api/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (resData) => {
          setShowResult(resData.report);
          setSubmitting(false);
        })
        .catch(() => {
          notify("error", "An error occured from the AI model");
          setSubmitting(false);
        });
    }
  };

  return (
    <>
      {submitting && (
        <PopModal>
          <div className="scan-modal">
            <img src={scan} alt="" />
            <h2>Scannnig test results</h2>
            <p>Generating diagnostics...</p>
          </div>
        </PopModal>
      )}
      {showResult && (
        <PopModal>
          <div className="result-modal">
            <img src={note} alt="" />
            <h2>Test Diagnosis</h2>
            <p>{showResult}</p>
            <Button
              text="Ok"
              type="contained"
              color="#fff"
              backgroundColor="#155eef"
              onClick={() => {
                navigate("/dashboard");
              }}
              big
              long
            />
          </div>
        </PopModal>
      )}
      <form onSubmit={handleSubmit(onAnalyse)}>
        <h3>Patient Details</h3>
        <div className="form-row">
          <FormInput
            type="text"
            label="Patient's Name"
            name="name"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter patient's name" }}
            small
          />
          <FormInput
            type="number"
            label="Patient's Age"
            name="age"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter patient's age" }}
            small
          />
        </div>
        <h3>Upload Mammogram</h3>
        <ImageUpload image={image} setImage={setImage} />
        <FormButton label="Submit" error={false} loading={submitting} />
      </form>
    </>
  );
}

export default AnalyseByMammogram;
