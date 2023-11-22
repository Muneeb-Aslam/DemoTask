import React from "react";
import user from "@public/assets/images/user1.png";
import like from "@public/assets/images/like.svg";
import unlike from "@public/assets/images/unlike.svg";
import Image from "next/image";
const CommentViewer = (props) => {
    const { username, comment, count, isLike } = props.comment;
    const img = props.image;
    return (
        <header className="w-1/2 sm:w-[50%] lg:w-[40%] flex flex-col items-center justify-center pb-8">
            <div className="text-black font-bold text-lg p-4">
                Comment Preview
            </div>
            <section className="w-full rounded-md bg-white p-4 shadow-card flex  items-start justify-center space-x-4">
                {img ? (
                    <Image
                        src={img}
                        alt="profile"
                        className="rounded"
                        width={36}
                        height={36}
                    />
                ) : (
                    <Image
                        src={user}
                        alt="profile"
                        className="rounded"
                        width={36}
                        height={36}
                    />
                )}
                <div className="w-max flex flex-col items-start justify-center space-y-2">
                    <div className="text-username font-bold  text-center text-sm md:text-md">
                        {username}
                    </div>
                    <p className="text-comment font-normal h-max">{comment}</p>
                </div>
                <div className="w-max flex flex-col items-center justify-center space-y-2 self-center">
                    <div className="flex flex-col items-center justify-center">
                        {isLike ? (
                            <Image src={like} alt="profile" />
                        ) : (
                            <Image src={unlike} alt="profile" />
                        )}
                        <div className="text-count font-semibold">{count}</div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default CommentViewer;
