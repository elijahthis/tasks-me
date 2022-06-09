import "./styles.scss";
import Calendar from "../../components/Calendar";
// import Tasks from "../../components/Tasks";
import Button from "../../components/Button";
import Modal from "../../components/Modals/Modal";
import { useEffect, useState } from "react";
import { AddEvent } from "../../components/Modals/ModalChildren";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

const Body = () => {
    const [openModal, setOpenModal] = useState(false);
    const [eventList, setEventList] = useState<
        {
            id: string;
            title: string;
            start: string;
            end: string;
            description: string;
        }[]
    >([]);

    useEffect(() => {
        try {
            const storedList = JSON.parse(
                localStorage.getItem("tasks-me") as string
            );
            if (storedList) {
                setEventList(storedList);
            }
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <SimpleBarReact style={{ height: "calc(100vh - 88px)" }}>
            <div className="Body">
                {/* <div className="carousel"></div> */}
                <div className="Body__header">
                    <h2>
                        One-stop calendar to keep track of all your tasks and
                        events
                    </h2>
                    <Button
                        theme="dark"
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        Add event
                    </Button>
                </div>
                <div className="CalendarTasks">
                    <Calendar
                        eventList={eventList}
                        setEventList={setEventList}
                    />
                    {/* <Tasks /> */}
                </div>

                <Modal openModal={openModal} setOpenModal={setOpenModal}>
                    <AddEvent
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        eventList={eventList}
                        setEventList={setEventList}
                    />
                </Modal>
            </div>
        </SimpleBarReact>
    );
};

export default Body;
