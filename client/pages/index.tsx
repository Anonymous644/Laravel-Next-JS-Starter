import { Button, TextField } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("Fetching Name ..//");
    const [newName, setNewName] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost/api/name")
            .then((res) => {
                setName(res.data.data);
            })
            .catch((err) => {
                setName("Error Getting Data");
                console.error(JSON.stringify(err, null, 2));
            });
    }, []);

    function handleNameChanged() {
        if (newName != "")
            axios
                .post("http://localhost/api/name", { name: newName })
                .then((res) => {
                    setName(res.data.data);
                    setNewName("");
                });
        // .catch((err) => {
        //     console.error(JSON.stringify(err));
        // });
    }

    function handleNewNameChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setNewName(e.target.value);
    }

    return (
        <div>
            <Head>
                <title>Laravel Next Starter</title>
                <meta
                    name="description"
                    content="Laravel Next JS with Docker/Sail"
                />
            </Head>
            <div className="bg-white shadow-lg text-3xl font-bold text-slate-800 p-10 rounded-b-md text-center cursor-pointer hover:bg-blue-700 active:bg-blue-400 hover:text-white transition-all">
                Laravel Next Starter Pack
            </div>
            <div className="p-8 text-lg">
                <div className="font-bold">
                    Welcome To laravel Next Starter Pack
                </div>
                <div className="">This Pack Includes</div>
                <div className="ml-4">
                    <li>Laravel With Sail/Docker</li>
                    <li>Next JS/TS with Tailwind and Material UI Installed</li>
                </div>

                <div className="w-screen h-1 rounded-full bg-slate-300 mt-8"></div>

                <div className="mt-8 text-2xl font-bold text-white w-full text-center bg-blue-600 py-4 rounded-full  cursor-pointer hover:bg-slate-800 active:bg-blue-400 transition-all">
                    Simple Next App
                </div>
                <div className="mt-6 text-lg font-bold">My Name Is </div>
                <div className="font-bold text-white text-center bg-emerald-700 py-2 px-10 rounded-full  cursor-pointer hover:bg-slate-800 active:bg-blue-400 transition-all w-fit">
                    {name}
                </div>
                <div className="mt-6 text-lg font-bold">Enter Your Name </div>
                <div className="flex items-end">
                    <TextField
                        label="New Name"
                        variant="outlined"
                        value={newName}
                        onChange={handleNewNameChanged}
                    />
                    <div className="ml-2 h-full">
                        <Button variant="outlined" onClick={handleNameChanged}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
