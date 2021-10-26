import React, { useState } from "react";
import NoteBookLayout from "./notebooks";

export default function MenuLayout({ntBkSelected, setNtBkSelected}) {

    return  (
        <>
        <NoteBookLayout 
                        ntBkSelected = {ntBkSelected}
                        setNtBkSelected = {setNtBkSelected}
        />
        </>
    )
}