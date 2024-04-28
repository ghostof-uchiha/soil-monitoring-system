import { useState } from "react";
import { CropData } from "../../../utils/fertidata"

interface Crops {
    CropId: number;
}


const CropFertilizerNeed: React.FC<Crops> = ({ CropId }) => {
    const generalPrinciples = (CropData as any)[0].Crops[CropId].General_Principles as any[];
    const Fertilizer_Application_Stages = (CropData as any)[0].Crops[CropId].Fertilizer_Application_Stages as any[];
    const Specific_Recommendations = (CropData as any)[0].Crops[CropId].Specific_Recommendations as any[];
    const Additional_Considerations = (CropData as any)[0].Crops[CropId].Additional_Considerations as any[];
    const Further_Resources = (CropData as any)[0].Crops[CropId].Further_Resources as any[];
    const overview = (CropData as any)[0].Crops[CropId].overview as any;

    const [isOverview, setIsOverview] = useState(false)


    const formatStageDescription = (description: string) => {
        // Split the description by newline characters
        const lines = description.split(/\n/);

        // Return the lines as bullet points if there are multiple lines
        if (lines.length > 1) {
            return (
                <ul className="list-disc pl-5">
                    {lines.map((line) => (
                        <li key={line} className="mt-1">
                            {line}
                        </li>
                    ))}
                </ul>
            );
        }

        // Return the description as a paragraph if it's a single line
        return <p className="font-normal inline">{description}</p>;
    };

    return (
        <div>

            <h2 className="font-bold">
                Applying Fertilizer to {(CropData as any)[0].Crops[CropId].name} for Optimal Growth:
            </h2>
            {overview == "" ? (
                <>
                    <p className="font-normal">
                        {(CropData as any)[0].Crops[CropId].name} thrives with proper fertilization practices that provide the essential nutrients for healthy growth and yield. Here's a breakdown of key points to consider:
                    </p>

                </>
            ) : (
                <>
                    <p className="font-normal">
                        {overview}
                    </p>
                </>
            )}




            {generalPrinciples.length === 0 ? (
                <>
                </>
            ) : (
                <>
                    <h2 className="font-bold mt-4">
                        General Principles:
                    </h2>
                    <ul role="list" className="dark:marker:text-stroke marker:text-bodydark3 mt-2 list-disc pl-5">
                        {generalPrinciples.map((item: any) => (
                            <li key={item[0]} className="mt-1">
                                <h2 className="font-semibold inline">
                                    {item[0]}:
                                </h2>
                                <span className="font-normal inline"> {item[1]}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}


            <h2 className="font-bold mt-4">
                Fertilizer Application Stages:
            </h2>

            <ul role="list" className="dark:marker:text-stroke marker:text-bodydark3 mt-2 list-disc pl-5">
                {Fertilizer_Application_Stages.map((item: any) => (
                    <li key={item[0]} className="mt-1">
                        <h2 className="font-semibold inline">
                            {item[0]}:
                        </h2>
                        <span className="font-normal inline"> {formatStageDescription(item[1])}</span>
                    </li>
                ))}
            </ul>

            <h2 className="font-bold mt-4">
                Specific Recommendations:
            </h2>
            (Always adjust based on soil test results and local conditions)

            <ul role="list" className="dark:marker:text-stroke marker:text-bodydark3 mt-2 list-disc pl-5">
                {Specific_Recommendations.map((item: any) => (
                    <li key={item[0]} className="mt-1">
                        <h2 className="font-semibold inline">
                            {item[0]}:
                        </h2>
                        <span className="font-normal inline"> {item[1]}</span>

                        {item[2] == "" ? (<></>) : (
                            <>
                                <a href={`${item[2]}`} className="text-[#1dc8cd]"> read more</a>
                            </>)}

                    </li>
                ))}
            </ul>

            <h2 className="font-bold mt-4">
                Additional Considerations:
            </h2>
            <ul role="list" className="dark:marker:text-stroke marker:text-bodydark3 mt-2 list-disc pl-5">
                {Additional_Considerations.map((item: any) => (
                    <li key={item[0]} className="mt-1">
                        <h2 className="font-semibold inline">
                            {item[0]}:
                        </h2>
                        <span className="font-normal inline"> {item[1]}</span>
                    </li>
                ))}
            </ul>

            <h2 className="font-bold mt-4">
                Further Resources:
            </h2>
            <ul role="list" className="dark:marker:text-stroke marker:text-bodydark3 mt-2 list-disc pl-5">
                {Further_Resources.map((item: any) => (
                    <li key={item[0]} className="mt-1">
                        <a href={`${item[1]}`} className="text-[#1dc8cd]">
                            <h2 className="font-semibold inline">
                                {item[0]}:
                            </h2>
                        </a>
                        <span className="font-normal inline"> {item[2]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CropFertilizerNeed