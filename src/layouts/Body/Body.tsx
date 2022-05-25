import "./styles.scss";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import Button from "../../components/Button";
import Modal from "../../components/Modals/Modal";
import { useState } from "react";
import { AddEvent } from "../../components/Modals/ModalChildren";

const Body = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="Body">
            {/* <div className="carousel"></div> */}
            <div className="Body__header">
                <h2>
                    One-stop calendar to keep track of all your tasks and events
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
                <Calendar />
                {/* <Tasks /> */}
            </div>

            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <AddEvent openModal={openModal} setOpenModal={setOpenModal} />
            </Modal>
        </div>
    );
};

export default Body;
