import { useState } from "react";
import Modal from "react-modal";

import { addHours, differenceInSeconds } from "date-fns";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: 4,
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "Evento",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) return;

    if (formValues.title.length <= 0) return;

    onCloseModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label className="w-100">Fecha y hora inicio</label>
          <DatePicker
            className="form-control"
            selected={formValues.start}
            onChange={(e) => onDateChanged(e, "start")}
            dateFormat="Pp"
            locale="es"
            showTimeSelect
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label className="w-100">Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            className="form-control"
            onChange={(e) => onDateChanged(e, "end")}
            showTimeSelect
            dateFormat="Pp"
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            name="title"
            value={formValues.title}
            onChange={onInputChange}
            type="text"
            className="form-control"
            placeholder="Título del evento"
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
