import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import "./DetailClinic.scss";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";
import ProfileDoctor from "../Doctor/ProfileDoctor";
import { getAllDetailClinicById } from "../../../services/userService";
import _ from "lodash";
import { LANGUAGES } from "../../../utils";
class DetailClinic extends Component {
   constructor(props) {
      super(props);
      this.state = {
         arrDoctorId: [],
         dataDetailClinic: {},
      };
   }
   async componentDidMount() {
      if (
         this.props.match &&
         this.props.match.params &&
         this.props.match.params.id
      ) {
         let id = this.props.match.params.id;

         let res = await getAllDetailClinicById({
            id: id,
         });
         if (res && res.errCode === 0) {
            let data = res.data;
            let arrDoctorId = [];
            if (data && !_.isEmpty(res.data)) {
               let arr = data.doctorClinic;
               if (arr && arr.length > 0) {
                  arr.map((item) => {
                     arrDoctorId.push(item.doctorId);
                  });
               }
            }

            this.setState({
               dataDetailClinic: res.data,
               arrDoctorId: arrDoctorId,
            });
         }
      }
   }
   async componentDidUpdate(prevProps, preState, snapshot) {
      if (this.props.language !== prevProps.language) {
      }
   }

   render() {
      let { arrDoctorId, dataDetailSpecialty, dataDetailClinic } = this.state;
      console.log("array doctor id: ", arrDoctorId);
      let { language } = this.props;
      return (
         <div className="detail-specialty-container">
            <HomeHeader isShowBanner={false} />
            <div className="detail-specialty-body">
               <div className="description-specialty">
                  {dataDetailClinic && !_.isEmpty(dataDetailClinic) && (
                     <>
                        <div>{dataDetailClinic.namea}</div>
                        <div
                           dangerouslySetInnerHTML={{
                              __html: dataDetailClinic.descriptionHTML,
                           }}
                        ></div>
                     </>
                  )}
               </div>

               {arrDoctorId &&
                  arrDoctorId.length > 0 &&
                  arrDoctorId.map((item, index) => {
                     return (
                        <div className="each-doctor" key={index}>
                           <div className="dt-content-left">
                              <div className="profile-doctor">
                                 <ProfileDoctor
                                    doctorId={item}
                                    isShowDescriptionDoctor={true}
                                    isShowLinkDetail={true}
                                    isShowPrice={false}
                                 ></ProfileDoctor>
                              </div>
                           </div>
                           <div className="dt-content-right">
                              <div className="doctor-schedule">
                                 <DoctorSchedule
                                    doctorIdFromParent={item}
                                 ></DoctorSchedule>
                              </div>
                              <div className="doctor-extra-infor">
                                 <DoctorExtraInfor
                                    doctorIdFromParent={item}
                                 ></DoctorExtraInfor>
                              </div>
                           </div>
                        </div>
                     );
                  })}
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      language: state.app.language,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
