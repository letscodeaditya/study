//nested list
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

export default function Ta() {
    const user = [
        {
            name: "aditya", email: "abc@gmail.com", address: [
                { houseno: 10, city: "patna", country: "india" },
                { houseno: 20, city: "kolkata", country: "india" },
                { houseno: 30, city: "patna", country: "india" },
            ]
        },
        {
            name: "ayush", email: "def@gmail.com", address: [
                { houseno: 60, city: "delhi", country: "india" },
                { houseno: 90, city: "delhi", country: "india" },
                { houseno: 70, city: "delhi", country: "india" },
            ]
        },
        {
            name: "ryben", email: "ghi@gmail.com",
            address: [
                { houseno: 40, city: "mumbai", country: "india" },
                { houseno: 111, city: "mumbai", country: "india" },
                { houseno: 80, city: "mumbai", country: "india" },
            ]
        }
    ]

    return (
        <div>
            <h1>list with nested array</h1>
            <Table variant="dark" striped>
                <tbody>
                    <tr>
                        <td>s.n</td>
                        <td>name</td>
                        <td>email</td>
                        <td>address</td>
                    </tr>
                    {
                        user.map((item, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {/* nested list start here */}
                                    <Table variant="light">
                                        <tbody>
                                            <tr>
                                                <td>house no.</td>
                                                <td>city</td>
                                                <td>country</td>
                                            </tr>
                                            {
                                                item.address.map((data) =>
                                                    <tr>
                                                        <td>{data.houseno}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    )



}