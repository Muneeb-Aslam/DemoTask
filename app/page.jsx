"use client";
import React from "react";
import CommentViewer from "@components/commentviewer";
import Image from "next/image";
import send from "@public/assets/images/send.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, number, boolean } from "zod";

const Home = () => {
    const [preview, setPreview] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const registrationSchema = object({
        username: string().min(1, { message: "username required" }),
        comment: string().min(1, { message: "comment required" }),
        count: number().min(1, { message: "like count required" }),
        isLike: boolean(),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(registrationSchema) });
    const [Comment, setComment] = React.useState({
        username: "Muneeb",
        comment:
            "Hello how are you doing this fine and lovely evening.hope this message finds you well",
        count: 12,
        isLike: true,
    });

    const handleChange = (e) => {
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        }
    };
    const onSubmit = (data) => {
		setImage(preview)
		return(
			setComment(data)
		)
    };

    return (
        <>
            <CommentViewer comment={Comment} image={image}/>
            <form
                action=""
                className="w-1/2 sm:w-[50%] lg:w-[40%] flex flex-col justify-center items-start space-y-4 py-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="self-center w-40 h-40 flex justify-center items-center rounded-full bg-[#FFF]">
                    {preview && (
                        <Image
                            height={0}
                            width={0}
                            className="object-cover !w-full !h-full rounded-full cursor-pointer"
                            src={preview}
                            alt="Profile"
                        />
                    )}
                    <label htmlFor="imageSelected">
                        <div className="rounded-full bg-white flex items-center justify-center cursor-pointer font-semibold text-lg text-username">
                            {!preview && "Select Image"}
                        </div>
                    </label>
                    <input
                        className="sr-only !cursor-pointer"
                        type="file"
                        name="imageSelected"
                        id="imageSelected"
                        accept=".png, .svg, .jpg, .jpeg"
                        onChange={handleChange}
                    />
                </div>
                <label
                    htmlFor="username"
                    className="text-username font-bold text-md"
                >
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Enter username"
                    className="pl-2 rounded outline-none bg-[#FFF] text-input font-[300] h-[3rem] w-full text-sm md:text-md"
                    {...register("username")}
                />
                {errors.username && (
                    <p className="text-[#ff0000] text-xs">
                        {errors.username.message}
                    </p>
                )}
                <label
                    htmlFor="comment"
                    className="text-username font-bold text-md"
                >
                    Comment
                </label>
                <input
                    type="text"
                    placeholder="Enter your comment"
                    className="pl-2 rounded outline-none bg-[#FFF] text-input font-[300] h-[3rem] w-full text-sm md:text-md"
                    {...register("comment")}
                />
                {errors.comment && (
                    <p className="text-[#ff0000] text-xs">
                        {errors.comment.message}
                    </p>
                )}
                <label
                    htmlFor="likecount"
                    className="text-username font-bold text-md"
                >
                    Like count
                </label>
                <div className="w-full flex items-center space-x-2">
                    <input
                        type="number"
                        placeholder="Enter like count"
                        className="pl-2 rounded outline-none bg-[#FFF] text-input font-[300] h-[3rem] w-[70%] md:w-[80%] text-sm md:text-md"
                        {...register("count", { valueAsNumber: true })}
                    />
                    <div className="w-[30%] md:w-[20%] flex items-center justify-end space-x-2">
                        <input
                            type="checkbox"
                            name="like"
                            id=""
                            {...register("isLike")}
                        />
                        <label htmlFor="like">Liked</label>
                    </div>
                </div>
                {errors.count && (
                    <p className="text-[#ff0000] text-xs">
                        {errors.count.message}
                    </p>
                )}
                <button
                    type="submit"
                    className="mt-2 w-full bg-[#9BE5AB] rounded p-2 text-username font-semibold flex justify-center items-center space-x-2"
                >
                    <Image src={send} alt="button" className="" />
                    <p>Generate Comment</p>
                </button>
            </form>
        </>
    );
};

export default Home;
