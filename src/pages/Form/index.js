import { useState } from "react";
import axios from "axios";
import classes from "./Form.module.css";
import Link from "next/link";
import QRCode from "qrcode.react"; // import the library

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [Icb, setIcb] = useState(0);
    const [crid, setCrid] = useState("");
    const [qrCodeData, setQRCodeData] = useState(""); // add state for QR code data

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/submit-form-data", {
                firstName,
                lastName,
                idNumber,
                age,
                address,
                crid,
                Icb,
            });
            console.log(response.data);
            // Reset form fields after successful submission
            setFirstName("");
            setLastName("");
            setIdNumber("");
            setAge("");
            setAddress("");
            setCrid("");
            setIcb("");
            setQRCodeData(""); // reset QR code data state
            window.alert("Data submitted successfully!");
        } catch (error) {
            console.log(error);
        }
    };

    const generateCrid = () => {
        const date = new Date();
        const random = Math.floor(Math.random() * 1000000);
        const newCrid = `CRID-${date.getFullYear()}${date.getMonth()}${date.getDate()}${random}`;
        setCrid(newCrid);
        setQRCodeData(newCrid); // set QR code data state to CRID
    };


    return (


        <form onSubmit={handleSubmit} className={classes.form}>
            <Link href={"/"}>Home</Link>
            <div className={classes.formGroup}>
                <label className={classes.label}>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.label}>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>

            <div className={classes.formGroup}>
                <label className={classes.label}>ID Number:</label>
                <input
                    type="text"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>

            <div className={classes.formGroup}>
                <label className={classes.label}>Age:</label>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>

            <div className={classes.formGroup}>
                <label className={classes.label}>Address:</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>

            <div className={classes.formGroup}>
                <label className={classes.label}>ICB:</label>
                <input
                    type="text"
                    value={Icb}
                    onChange={(e) => setIcb(e.target.value)}
                    className={classes.input}
                    required
                />
            </div>


            {/* the crid button... */}

            <button type="button" onClick={generateCrid} className={classes.button}>
                Generate CRID
            </button>
            {crid && (
                <>
                    <p className={classes.crid}>CRID: {crid}</p>
                    <QRCode value={qrCodeData} size={0} /> {/* add QR code */}
                    <p className={classes.crid}>Hash Value: {qrCodeData}</p> {/* add hash value */}
                </>
            )}

            <button type="submit" className={classes.button}>
                Submit
            </button>
        </form>
    );
};

export default Form;
