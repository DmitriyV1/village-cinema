import Button from "./Button";
import BuyTicket from "./BuyTicket";
import Modal from "./Modal";

function ModalButton({
  disabledRule,
  variationRule,
  time,
  date,
  name,
  customer,
}) {
  return (
    <Modal>
      <Modal.Open opens="form">
        <Button size="large" disabled={disabledRule} variation={variationRule}>
          {time}
        </Button>
      </Modal.Open>
      <Modal.Window name="form">
        <BuyTicket time={time} date={date} name={name} customer={customer} />
      </Modal.Window>
    </Modal>
  );
}

export default ModalButton;
