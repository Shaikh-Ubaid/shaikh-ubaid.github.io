function contact() {
    return (
        <div className="flex items-center justify-center p-12">
            <div>
                <article className="prose prose-lg mb-5">
                    <h1>Contact</h1>
                    <p>
                        Get in touch!
                    </p>
                </article>
                <div className="mx-auto w-full max-w-[550px]">
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSfhUIiifGi2fSSBwuDSaLNFStfxU7eNk7E4sI1zLaUVIdh_tA/formResponse"
                        target="_self"
                        method="POST"
                        id="mG61Hd"
                        >
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="entry.201674409"
                                id="name"
                                placeholder="Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="entry.1888292093"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium"
                            >
                                Message:
                            </label>
                            <textarea
                                rows="4"
                                name="entry.1236758430"
                                id="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default contact;
