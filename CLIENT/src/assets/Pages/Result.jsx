import { useEffect, useState } from "react"

const Result = ({ name, result }) => {
    const [Score, setScore] = useState("")
    useEffect(() => {
        const score = result?.questions?.filter((element) => {
            return element?.Answers?.includes(element?.userAnswer)
        });
        setScore(score)
    }, [result])

    return (
        <>
            <div className="container my-5 w-50">
                <h1 className=" display-5 d-flex justify-content-center mb-4">
                    Result {name}
                </h1>
                You have {Score?.length} Answers Corrected
            </div>
        </>
    )
}

export default Result
