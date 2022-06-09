import { useState } from "react";

interface EventInfoProps {
    info: { el: any; event: any; jsEvent: any; view: any };
    eventInd: number;
    eventList: {
        id: string;
        title: string;
        start: string;
        end: string;
        description: string;
    }[];
    setEventList: (
        list: {
            id: string;
            title: string;
            start: string;
            end: string;
            description: string;
        }[]
    ) => void;
}

const EventInfo = ({
    info,
    eventInd,
    eventList,
    setEventList,
}: EventInfoProps) => {
    const eventObj = eventList[eventInd] || [];
    const [formData, setFormData] = useState({
        id: eventList.length.toString(),
        title: eventObj.title,
        start: eventObj.start,
        end: eventObj.end,
        description: eventObj.description,
    });

    // useEffect(() => {
    //     console.log(eventInd);
    // }, []);

    return (
        <div
            className="ModalChild EventInfo"
            onClick={(ev) => {
                ev.stopPropagation();
            }}
        >
            <h3>Event Info</h3>
            <div>
                <h4>{formData.title}</h4>
                <p>
                    <input
                        type="text"
                        name=""
                        id=""
                        value={formData.description}
                        onChange={(ev) => {
                            const newData = { ...formData };
                            newData.description = ev.target.value;
                            setFormData(newData);
                            const newList = [...eventList];
                            newList[eventInd] = formData;
                            setEventList(newList);
                            console.log(newList);
                        }}
                    />
                </p>
                <div className="dates">
                    <p className="dates__date">{formData.start}</p>
                    <p>to</p>
                    <p className="dates__date">{formData.end}</p>
                </div>
            </div>
        </div>
    );
};

export default EventInfo;
