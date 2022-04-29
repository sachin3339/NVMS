import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DevelopmentUrl from '../../data/api';
import { useLocation } from "react-router-dom";
import Sidebar from '../sidebar/SideBar';
import Navbar from '../navbar/NavBar';
import Select from 'react-select';
import '../datatable/Table.css';

import './mapcandidate.css'
const MapCandidateToRequirement = () => {

    const location = useLocation();
    const { from } = location.state;

    console.log(from[0]);
    const [candidateName, setCandidateName] = useState([{}])
    const [selectedOption, setSelectedOption] = useState();
    const [fetchDbCandidateName, setFetchDbCandidateName] = useState([]);
    let a = [], b = [];
    const accesToken = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    let expdate = (from[5].slice(0, 10)).toString();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let datenow = new Date(expdate);
    let day = days[datenow.getDay()];
    let month = months[datenow.getMonth()];
    let date = datenow.getDate();
    const displayexpdate = `${day} ${month} ${date}`
    console.log(displayexpdate)





    // getting ALL vwndor data to table
    useEffect(() => {
        axios.get(DevelopmentUrl + `/candidate/show/${id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${accesToken}`
            }
        })
            .then((res) => {
                setCandidateName(res.data.post);
                //console.log( res.data.post);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get(DevelopmentUrl + `/requirement/mycandidate/${from[0]}/${id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${accesToken}`
            }
        })
            .then((res) => {
                setFetchDbCandidateName(res.data.post[0].Candidate);
                console.log(res.data.post[0].Candidate);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    for (let i = 0; i < candidateName.length; i++) {

        a.push({
            "value": candidateName[i]._id,
            "label": candidateName[i].Name
        });
    }

    for (let i = 0; i < fetchDbCandidateName.length; i++) {


        b.push({
            "value": candidateName[i]._id,
            "label": candidateName[i].Name
        });

    }
    // console.log(dbAll);
    // console.log(dbId);

    // const a = [{ value: "0", display: "Jamsheer" }, { value: "1", display: "Muhammed" }, { value: "2", display: "Ravi" }, { value: "3", display: "Ajmal" }, { value: "4", display: "Ryan" }];
    // const b = [{ value: "0", display: "Jamsheer", $$hashKey: "008" }, { value: "1", display: "Muhammed", $$hashKey: "009" }, { value: "2", display: "Ravi", $$hashKey: "00A" }, { value: "3", display: "Ajmal", $$hashKey: "00B" }];

    // A comparer used to determine if two entries are equal.
    const isSameUser = (a, b) => a.value === b.value && a.label === b.label;

    // Get items that only occur in the left array,
    // using the compareFunction to determine equality.
    const onlyInLeft = (left, right, compareFunction) =>
        left.filter(leftValue =>
            !right.some(rightValue =>
                compareFunction(leftValue, rightValue)));

    const onlyInA = onlyInLeft(a, b, isSameUser);
    const onlyInB = onlyInLeft(b, a, isSameUser);

    const results = [...onlyInA, ...onlyInB];

    console.log(results);
    // const results = dbAll.filter(({ value: id1 }) => !dbId.some(({ value: id2 }) => id2 === id1));
    // console.log(results);
    // console.log(typeof(fetchDbCandidateName[0]._id));
    // for (let i = 0; i < fetchDbCandidateName.length; i++) {

    //     if(obj[i].value)
    //     obj.push({
    //         "value": candidateName[i]._id,
    //         "label": candidateName[i].Name
    //     });
    // }    
    // if (fetchDbCandidateName[0]) {
    //     for (let i = 0; i < fetchDbCandidateName[0].Candidate.length; i++) {
    //         let value = fetchDbCandidateName[0].Candidate[i]._id;
    //         let label = fetchDbCandidateName[0].Candidate[i].Name;
    //         dbCandidateName.push({
    //             "value": value,
    //             "label": label
    //         });
    //     }
    // }
    // let dbNameforTable = fetchDbCandidateName.Candidate;
    // for(let i=0; i<dbNameforTable.length; i++ ){
    //     console.log(dbNameforTable[i].Name);
    //     console.log(dbNameforTable[i]._id);
    // }
    //console.log(fetchDbCandidateName.length);
    const handleSelect = (event) => {

        setSelectedOption(Array.isArray(event) ? event.map(value => value.value) : []);
        console.log(selectedOption);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let formdata = {
            Candidate: selectedOption

        };
        alert("Candidate added to requirement successfully");
        console.log(formdata);
        axios.patch(DevelopmentUrl + `/requirement/update/${from[0]}`, formdata, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${accesToken}`
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }
    // const defaultSelectedValue = useMemo(() => {
    //     // to update the local state
    //     selectedOption(dropDowonData);

    //     return dropDowonData[0];
    //   }, []);

    return (

        <div className="list">
              
            <Sidebar />
           

            <div className=''>
           
            <div className="listContainer">
                <Navbar />


    
                <div className='jobDiscription' >

                    <h3>Job Description </h3>


                    <div style={{ display: "flex", backgroundColor: "#e9ecef", textAlign: "center" }}>
                        <div style={{ fontWeight: "normal", marginTop: "10px", marginLeft: "10px" }}> Job For :</div>
                        <div style={{ marginLeft: "10px", marginBottom: "10px", marginTop: "12px" }}>
                            <h6>{from[1]}</h6>


                        </div>

                    </div>


                    <div style={{ display: "flex", backgroundColor: "#e9ecef", textAlign: "center" }}>
                        <div style={{ fontWeight: "normal", marginTop: "10px", marginLeft: "10px" }}> Required Skills :</div>
                        <div style={{ marginLeft: "10px", marginBottom: "10px", marginTop: "12px" }}>
                            <h6>{from[2]}</h6>


                        </div>

                    </div>

                    <div style={{ display: "flex", backgroundColor: "#e9ecef", textAlign: "center" }}>
                        <div style={{ fontWeight: "normal", marginTop: "10px", marginLeft: "10px" }}> Client :</div>
                        <div style={{ marginLeft: "10px", marginBottom: "10px", marginTop: "12px" }}>
                            <h6>{from[3]}</h6>


                        </div>

                    </div>

                    <div style={{ display: "flex", backgroundColor: "#e9ecef", textAlign: "center" }}>
                        <div style={{ fontWeight: "normal", marginTop: "10px", marginLeft: "10px" }}> Year Of Exp :</div>
                        <div style={{ marginLeft: "10px", marginBottom: "10px", marginTop: "12px" }}>
                            <h6>{from[4]}</h6>


                        </div>

                    </div>

                    <div style={{ display: "flex", backgroundColor: "#e9ecef", textAlign: "center" }}>
                        <div style={{ fontWeight: "normal", marginTop: "10px", marginLeft: "10px" }}> Expiry Date :</div>
                        <div style={{ marginLeft: "10px", marginBottom: "10px", marginTop: "12px" }}>
                            <h6>{displayexpdate}</h6>


                        </div>

                    </div>


                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginTop: "15px", width: "100%" }}>

                                <label>Select Candidates :</label>

                                <Select
                                    defaultValue={selectedOption}
                                    options={results}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    onChange={handleSelect}

                                />
                            </div>


                            <div style={{ marginLeft: "20px", marginTop: "30px" }}>

                                <button style={{ borderRadius: "30px" }}>Submit</button>

                            </div>
                        </div>
                    </form>

                </div>
                <div className="tablestyle table-responsive" style={{ height: "400px", overflow: "auto" }}>
                    {fetchDbCandidateName.length > 0 ?
                        <>
                            <h4>Selected Candidates List</h4>

                            <table className="table table-hover">

                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope="col">Notice Period</th>
                                        <th scope="col">Current_CTC</th>
                                        <th scope="col">Expected CTC</th>
                                        {/* <th scope="col">Registered ID</th> */}
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {fetchDbCandidateName.map((item, index) => {
                                        return (
                                            <tr>

                                                <th scope="row">{index + 1}</th>
                                                <td key={index}>
                                                    {item.Name}
                                                </td>

                                                <td>
                                                    {item.email}
                                                </td>
                                                <td >
                                                    {item.Notice_Period}
                                                </td>
                                                <td >
                                                    {item.Current_CTC}
                                                </td>
                                                <td>
                                                    {item.Expected_CTC}
                                                </td>
                                                <td>
                                                    <div className="cellAction">

                                                        <button style={{ width: "100px", height: "42px", borderRadius: "10px", backgroundColor: "#e14c4ce8" }}

                                                        //   onClick={() => deleteHandler(item._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>

                                                </td>
                                            </tr>)
                                    })}
                                </tbody>

                            </table>
                        </>
                        : null}
                </div>

            </div>
            </div>
        </div>


    )
}

export default MapCandidateToRequirement