import axios from "../axios";

const handleLoginApi = (email, password) => {
   return axios.post("api/login", { email, password });
};

const getAllUsers = (inputId) => {
   return axios.get(`api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
   return axios.post("/api/create-new-user", data);
};
const getAllCodeService = (inputType) => {
   return axios.get(`api/allcode?type=${inputType}`);
};
const deleteUserService = (userId) => {
   return axios.delete("/api/delete-user", { data: { id: userId } });
};
const editUserService = (inputData) => {
   return axios.put("/api/edit-user", inputData);
};
const getTopDoctorHomeService = (limit) => {
   return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
const getAllDoctors = () => {
   return axios.get(`/api/get-all-doctors`);
};
const saveDetailDoctorService = (data) => {
   return axios.post("/api/save-infor-doctors", data);
};
const getDetailInforDoctor = (inputId) => {
   return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
};
const saveBulkScheduleDoctor = (data) => {
   return axios.post("/api/bulk-create-schedule", data);
};
const getScheduleDoctorByDate = (doctorId, date) => {
   return axios.get(
      `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
   );
};
const getExtraInforDoctorById = (doctorId) => {
   return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
};
const getProFileDoctorById = (doctorId) => {
   return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
};
const postPatientBookAppointment = (data) => {
   return axios.post(`/api/patient-book-appointment`, data);
};
const postVerifyBookedAppointment = (data) => {
   return axios.post(`/api/verify-booked-appointment`, data);
};
const createNewSpecialty = (data) => {
   return axios.post(`/api/create-new-specialty`, data);
};
const getAllSpecialty = (data) => {
   return axios.get(`/api/get-all-specialty`);
};
const getAllDetailSpecialtyById = (data) => {
   return axios.get(
      `/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`
   );
};
const createNewClinic = (data) => {
   return axios.post(`/api/create-new-clinic`, data);
};
const getAllClinic = (data) => {
   return axios.get(`/api/get-clinic`, data);
};
const getAllDetailClinicById = (data) => {
   return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
};
export {
   handleLoginApi,
   getAllUsers,
   createNewUserService,
   getAllCodeService,
   deleteUserService,
   editUserService,
   getTopDoctorHomeService,
   getAllDoctors,
   saveDetailDoctorService,
   getDetailInforDoctor,
   saveBulkScheduleDoctor,
   getScheduleDoctorByDate,
   getExtraInforDoctorById,
   getProFileDoctorById,
   postPatientBookAppointment,
   postVerifyBookedAppointment,
   createNewSpecialty,
   getAllSpecialty,
   getAllDetailSpecialtyById,
   createNewClinic,
   getAllClinic,
   getAllDetailClinicById,
};