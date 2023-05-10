import { useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import QRCode from 'qrcode.react';
// import { FingerprintSpinner } from 'react-epic-spinners';
import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'


const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [fingerprint, setFingerprint] = useState(null);
    const [qrCode, setQRCode] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const autoId = idNumber.padStart(9, '0');

        const fpPromise = FingerprintJS.load();
        const fp = await fpPromise;
        const result = await fp.get();

        setFingerprint(result.visitorId);

        const data = {
            firstName,
            lastName,
            idNumber: autoId,
            age,
            address,
            fingerprint: result.visitorId,
        };

        // Add code here to submit data
    };

    const handleQRCode = () => {
        const autoId = idNumber.padStart(9, '0');
        setQRCode(autoId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label>
                ID Number:
                <input
                    type="text"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>

            <div>
                <button type="button" onClick={handleQRCode}>
                    Generate QR Code
                </button>
                {qrCode && <QRCode value={qrCode} />}
            </div>

            <div>
                {/*{fingerprint ? (*/}
                {/*    <p>Your fingerprint: {fingerprint}</p>*/}
                {/*) : (*/}
                {/*    <FingerprintSpinner />*/}
                {/*)}*/}
            </div>
        </form>
    );
};

export default Form;
