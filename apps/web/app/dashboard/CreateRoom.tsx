"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { TcreateRoom } from "types";
import { Dialog } from "ui";
import InputFields from "./InputFields";

function CreateRoom() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<TcreateRoom>();

  const onSubmit: SubmitHandler<TcreateRoom> = async (data) => {
    const name = data.name;

    try {
      await axios.post("/api/createRoom", {
        name: name.trim(),
      });

      setOpenModal(false);
      resetField("name");

      toast.success("Room created 🎉");
      router.refresh();
    } catch (error) {
      toast.error("Could not create room 🧐");
    }
  };

  return (
    <Dialog
      dialogDescription="Once created, you can share the meeting link to invite people to your room."
      dialogTitle="Create a new room"
      inputFields={<InputFields errors={errors} register={register} />}
      onSubmit={handleSubmit(onSubmit)}
      openModal={openModal}
      setOpenModal={setOpenModal}
      submitText="Add Room"
      trigger={
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="inline-flex h-[75px] w-[75px] items-center justify-center rounded-xl text-cyan-500 ring-2 ring-cyan-500 transition hover:ring-teal-500 hover:ring-offset-2 hover:ring-offset-cyan-500"
            type="button"
          >
            <PlusIcon height={75} width={75} />
          </button>
          <h1 className="text-sm text-gray-400 opacity-70">
            Create a new room
          </h1>
        </div>
      }
    />
  );
}

export default CreateRoom;
