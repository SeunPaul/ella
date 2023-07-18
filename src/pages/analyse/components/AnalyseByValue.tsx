import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import PopModal from "../../../components/ui/modal/PopModal";
import FormInput from "../../../components/form/formInput/FormInput";
import FormButton from "../../../components/form/formButton/FormButton";
import Button from "../../../components/ui/button/Button";
import scan from "../../../assets/images/scan.gif";
import note from "../../../assets/icons/note.svg";
import notify from "../../../utils/notify";
import { Benign, Malignant } from "./Result";

function AnalyseByValue() {
  const [submitting, setSubmitting] = useState(false);
  const [showResult, setShowResult] = useState("");
  const { register, handleSubmit, formState } = useForm();

  const navigate = useNavigate();

  const onAnalyse: SubmitHandler<FieldValues> = (data) => {
    setSubmitting(true);
    const formData = {
      radius_mean: Number(data.mdcp),
      texture_mean: Number(data.sdg),
      perimeter_mean: Number(data.mst),
      area_mean: Number(data.mat),
      smoothness_mean: Number(data.mvr),
      concavity_mean: Number(data.msc),
      "concave points_mean": Number(data.mnc),
    };

    fetch("http://127.0.0.1:8000/v1/api/result/", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (resData) => {
        setShowResult(resData.Result);
        setSubmitting(false);
      })
      .catch(() => {
        notify("error", "An error occured from the AI model");
        setSubmitting(false);
      });
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
        <PopModal scroll>
          <div className="result-modal">
            <img src={note} alt="" />
            <h2>Test Diagnosis</h2>
            <p>patient has been diagnosed with {showResult} Cancer.</p>
            {showResult === "Benign" && <Benign />}
            {showResult === "Malignant" && <Malignant />}
            <Button
              text="Ok"
              type="contained"
              color="#fff"
              backgroundColor="#155eef"
              onClick={() => {
                // setShowResult("");
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
            name="patient_name"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter patient's name" }}
            small
          />
          <FormInput
            type="number"
            label="Patient's Age"
            name="patient_age"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter patient's age" }}
            small
          />
        </div>
        <h3>Test result details</h3>
        <div className="form-row">
          <FormInput
            type="number"
            label="Mean of distance from center to points onthe perimeter"
            name="mdcp"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
          <FormInput
            type="number"
            label="Standard Deviation of gray scale"
            name="sdg"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
        </div>
        <div className="form-row">
          <FormInput
            type="number"
            label="Mean size of the core tumor"
            name="mst"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
          <FormInput
            type="number"
            label="Mean area of core tumor"
            name="mat"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
        </div>
        <div className="form-row">
          <FormInput
            type="number"
            label="Mean of local variations in radius length"
            name="mvr"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
          <FormInput
            type="number"
            label="Mean of severity of concave portions of the contour"
            name="msc"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
        </div>
        <div className="form-row">
          <FormInput
            type="number"
            label="Mean of number of concave positions on the contour"
            name="mnc"
            color="white"
            register={register}
            formState={formState}
            rules={{ required: "Enter value" }}
            small
          />
        </div>
        <FormButton label="Submit" error={false} loading={submitting} />
      </form>
    </>
  );
}

export default AnalyseByValue;
