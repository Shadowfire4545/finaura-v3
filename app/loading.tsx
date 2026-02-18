"use client"

import { Spinner } from "@heroui/react";

export default function loadingBar() {
    return (
        <div className="min-h-screen fixed overflow-y-hidden z-999 w-full bg-white/20 opacity-70 backdrop-blur-2xl flex justify-center items-center">
            <Spinner size="lg" color="success" variant="wave" label="Cargando..." labelColor="success" classNames={{
                wrapper: "scale-120"
            }}/>
        </div>
    )
}