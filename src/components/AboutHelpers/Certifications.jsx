import Image from "next/image";

export const Certifications = () => {
    return (
        <Image
            src={"/certificate.png"}
            width={532}
            height={532}
            alt="web development completed certificate"
            id="certImg"
        />
    );
};

export default Certifications;
