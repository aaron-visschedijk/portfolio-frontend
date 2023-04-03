import { Flipped, spring } from "react-flip-toolkit";
import { JsxElement } from "typescript";


const onAppear = (el: HTMLElement, index: number): void => {
  spring({
    onUpdate: (val: any): void => {
      el.style.opacity = val.toString();
    },
    delay: index * 0,
  }
  );
}

const onExit = (el: HTMLElement, index: number, removeElement: () => void): (() => void) => {
  spring({
    onUpdate: (val: any): void => {
      el.style.opacity = (1 - val).toString();
    },
    onComplete: removeElement,
  });

  return (): void => {
    removeElement();
  };
};

interface Props {
  id: number;
  focus: (id: number) => void;
  type: string;
  className: string;
  card: React.ReactNode;
}

const Card = ({ id, focus, type, className, card }: Props): JSX.Element => {
  const flipId = `item-${type}-${id}`;

  return (
    <Flipped flipId={flipId} onAppear={onAppear} onExit={onExit} key={flipId}>
      <li className={className} onClick={() => focus(id)}>
        <Flipped inverseFlipId={flipId}>
          <div>
            <Flipped flipId={`${flipId}-content`} translate delayUntil={flipId}>
              <div>
                {card}
              </div>
            </Flipped>
          </div>
        </Flipped>

      </li>

    </Flipped>
  );
};

export default Card;
