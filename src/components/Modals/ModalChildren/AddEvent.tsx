import "./styles.scss";
import { useState } from "react";
import Button from "../../Button";
import { DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import "moment/locale/zh-cn";

const AddEvent = ({
    dateStr = "",
    openModal,
    setOpenModal,
    eventList,
    setEventList,
}: {
    dateStr?: string;
    openModal: boolean;
    setOpenModal: (argg: boolean) => void;
    eventList: { title: string; date: string }[];
    setEventList: ([]) => void;
}) => {
    const [formData, setFormData] = useState({
        title: "",
        date: dateStr || moment().toISOString().slice(0, 10),
    });

    return (
        <div
            className="ModalChild"
            onClick={(ev) => {
                ev.stopPropagation();
            }}
        >
            <h3>Add Event</h3>
            <form
                action=""
                onSubmit={(ev) => {
                    ev.preventDefault();
                    if (formData.title && formData.date) {
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
                    />
                </label>
                <label htmlFor="">
                    Start Date
                    <DatePicker
                        value={moment(formData.date) || moment()}
                        onChange={(date, dateString) => {
                            const newData = { ...formData };
                            newData.date = dateString;
                            setFormData(newData);
                        }}
                    />
                </label>
                <label htmlFor="">
                    End Date
                    <DatePicker />
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
