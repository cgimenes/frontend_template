"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"

type Inputs = {
  example: string
  code: string
  file: FileList
}

export default function SnippetsCreate() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {file, ...rest} = data
    console.log(data.file)
    const formData = new FormData();
    formData.append("file", file[0]);
    const blob = new Blob([JSON.stringify(rest)], {
      type: 'application/json'
    });
    formData.append("snippet", blob);

    axios({
      method: 'post',
      url: 'https://09ad-179-125-37-101.ngrok-free.app/snippets/',
      data: formData,
      headers: {
        "Authorization": 'Basic ' + btoa("oliveira" + ":" + "123mudar"),
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("file")} />
      <input defaultValue="test" {...register("example")} />
      <input {...register("code", { required: true })} />
      {errors.code && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}
