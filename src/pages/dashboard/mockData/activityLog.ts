import { ActivityLogType } from "../types";

// profile pictures
import anne from "../../../assets/images/anne.png";
import favour from "../../../assets/images/favour.png";
import jaine from "../../../assets/images/jaine.png";
import jamie from "../../../assets/images/jamie.png";
import rose from "../../../assets/images/rose.png";

const activityLog: ActivityLogType[] = [
  {
    id: 1,
    profilePic: rose,
    name: "Rose Josephine",
    diagnosisComment: "She has been diagnosed of Benign Tumor",
    diagnosisStatus: "diagnosed",
  },
  {
    id: 2,
    profilePic: jaine,
    name: "Mary Jaine",
    diagnosisComment: "She has been diagnosed of Malignancy",
    diagnosisStatus: "diagnosed",
  },
  {
    id: 3,
    profilePic: jamie,
    name: "Jamie Favour",
    diagnosisComment: "Results are certified clear, no diagnosis found",
    diagnosisStatus: "no diagnosis",
  },
  {
    id: 4,
    profilePic: anne,
    name: "Mary Anne",
    diagnosisComment: "She has been diagnosed of Benign Tumor",
    diagnosisStatus: "diagnosed",
  },
  {
    id: 5,
    profilePic: favour,
    name: "Jamie Favour",
    diagnosisComment: "Results are certified clear, no diagnosis found",
    diagnosisStatus: "no diagnosis",
  },
];

export default activityLog;
