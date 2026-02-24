"use client"

import { Spinner } from "@heroui/react";

export default function loadingBar() {
    return (
        <div className="min-h-screen fixed overflow-y-hidden z-999 w-full bg-black/20 opacity-90 backdrop-blur-2xl flex justify-center items-center">
            <Spinner size="lg" color="secondary" variant="wave" label="Cargando..." labelColor="secondary" classNames={{
                wrapper: "scale-120"
            }}/>
        </div>
    )
}