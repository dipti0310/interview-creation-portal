import react from "react";
import InterviewContext from "./InterviewContext";
import { useState } from "react";


const InterviewState=(props)=>{
  const host = "http://localhost:5000"
  const interviewsInitial=[
    // {
    //   "_id": "62323b08bb33389dbafe64d7",
    //   "participants": [
    //     "38d173dd-c2a9-4b0d-8294-552da4e98ff7",
    //     "fb73c415-0149-48f2-aaad-c81acc649775"
    //   ],
    //   "uid": "8dbce54b-b658-456d-885e-e10c4d11f4ee",
    //   "startDate": "2022-04-29T07:45:44.287Z",
    //   "endDate": "2022-04-29T09:45:44.287Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62324567bb33389dbafe64e3",
    //   "participants": [
    //     "200a32dc-dcff-4527-bbe0-c6aac9544a8f",
    //     "e339551e-7470-4956-ac36-993c62b2bd07"
    //   ],
    //   "uid": "77a0b194-322a-49e0-b90c-99da81d85fdb",
    //   "startDate": "2022-04-29T07:45:44.287Z",
    //   "endDate": "2022-04-29T09:45:44.287Z",
    //   "__v": 0
    // }
  ]

  const[interviews,setInterviews]=useState(interviewsInitial);

  //get all interviews
  // Get all Notes
  const getInterviews = async () => {
    // API Call 
    const response = await fetch(`${host}/interview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     
      }
    });
    const json = await response.json()
    console.log(json)
    setInterviews(json)
  }


  //Adding an interview
 const  AddInterview=async (startDate,endDate,participants)=>{
    const response = await fetch(`${host}/interview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify({startDate,endDate,participants})
    });
    console.log(JSON.stringify({startDate,endDate,participants}))


    console.log("Adding a new note"+response.status)
if(response.status==200){
      const interview={
        "participants": participants,
        "startDate": startDate,
        "endDate": endDate,
        "__v": 0
      };
  setInterviews(interviews.concat(interview));
}
  }

  //Edit an interview
 const EditInterview= async(uid,startDate,endDate,participants)=>{
  //API CALL
  const response = await fetch(`${host}/interview/${uid}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify({startDate,endDate,participants})
  });
  const json = response.json();
  console.log(uid+"++"+startDate+"+++++"+endDate);

  let newInterviews = JSON.parse(JSON.stringify(interviews))

  //Logic to edit in client
  if(response.status==200){
  for(let index=0;index<newInterviews.length;index++){
        const element=newInterviews[index];
        if(element.uid===uid){
          newInterviews[index].startDate=startDate;
          newInterviews[index].endDate=endDate;
          newInterviews[index].participants=participants
        break;
        }
      }
      setInterviews(newInterviews)
    }
 }

return(
    <InterviewContext.Provider value={{interviews,AddInterview,EditInterview,getInterviews}}>
        {props.children}
    </InterviewContext.Provider>
)
}



export default InterviewState;