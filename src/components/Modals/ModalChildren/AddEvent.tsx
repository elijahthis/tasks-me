import "./styles.scss";
import { useState } from "react";
import Button from "../../Button";
import { DatePicker } from "antd";
import "antd/dist/antd.min.css";
import moment from "moment";
import "moment/locale/zh-cn";

const AddEvent = ({
    dateStr = "",
    openModal,
    setOpenModal,
    eventList,
    setEventList,
    edit = false,
}: {
    dateStr?: string;
    openModal: boolean;
    setOpenModal: (argg: boolean) => void;
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
    edit?: boolean;
}) => {
    const [formData, setFormData] = useState({
        id: eventList.length.toString(),
        title: "",
        start: dateStr || moment().toISOString().slice(0, 10),
        end: dateStr || moment().toISOString().slice(0, 10),
        description: "",
    });

    return (
        <div
            className="ModalChild"
            onClick={(ev) => {
                ev.stopPropagation();
            }}
        >
            <h3>{edit ? "Edit" : "Add"} Event</h3>
            <form
                action=""
                onSubmit={(ev) => {
                    ev.preventDefault();
                    if (formData.title && formData.start) {
                        const newList = [...eventList, formData];
                        setEventList(newList);
                        localStorage.setItem(
                            "tasks-me",
                            JSON.stringify(newList)
                        );
                    }
                    setOpenModal(false);
                }}
            >
                <label htmlFor="">
                    Event title
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter event title"
                        value={formData.title}
                        onChange={(ev) => {
                            const newData = { ...formData };
                            newData.title = ev.target.value;
                            setFormData(newData);
                        }}
                    />
                </label>
                <label htmlFor="">
                    Event description
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter event description"
                        value={formData.description}
                        onChange={(ev) => {
                            const newData = { ...formData };
                            newData.description = ev.target.value;
                            setFormData(newData);
                        }}
                    />
                </label>
                <label htmlFor="">
                    Start Date
                    <DatePicker
                        value={moment(formData.start) || moment()}
                        onChange={(date, dateString) => {
                            const newData = { ...formData };
                            newData.start = dateString;
                            setFormData(newData);
                        }}
                    />
                </label>
                <label htmlFor="">
                    End Date
                    <DatePicker
                        value={moment(formData.end) || moment()}
                        onChange={(date, dateString) => {
                            const newData = { ...formData };
                            newData.end = dateString;
                            setFormData(newData);
                        }}
                    />
                </label>
                <div className="actions">
                    <Button theme="dark" variant="full">
                        Create
                    </Button>
                    <Button theme="light" variant="full">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
