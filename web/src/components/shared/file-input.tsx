// components/FormComponents/FileInput.tsx
import React, { FC, useCallback, useEffect } from "react"
import { DropzoneOptions, useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"

interface IFileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  name: string
}

const FileInput: FC<IFileInputProps> = (props) => {
  const { name, label = name } = props
  const { register, unregister, setValue, watch } = useFormContext()
  const files: File[] = watch(name)
  const onDrop = useCallback<DropzoneOptions["onDrop"]>(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name],
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  })
  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  return (
    <>
      <label
        className="mb-2 block text-sm font-bold capitalize text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <div {...getRootProps()}>
        <input
          {...props}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id={name}
          {...getInputProps()}
        />
        <div
          className={
            "w-full border border-dashed border-gray-900 p-2 " +
            (isDragActive ? "bg-gray-400" : "bg-gray-200")
          }
        >
          <p className="my-2 text-center">Drop the files here ...</p>
          {/* Optionally you may display a preview of the file(s) */}
          {!!files?.length && (
            <div className="mt-2 grid grid-cols-4 gap-1">
              {files.map((file) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FileInput
