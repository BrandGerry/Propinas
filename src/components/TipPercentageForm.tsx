const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {
  return (
    <div>
      <h3></h3>
      <form>
        {tipOptions.map((tipOp) => (
          <div className="flex gap-2" key={tipOp.id}>
            <label htmlFor={tipOp.id}>{tipOp.label}</label>
            <input
              id={tipOp.id}
              type="radio"
              name="tip"
              value={tipOp.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOp.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
