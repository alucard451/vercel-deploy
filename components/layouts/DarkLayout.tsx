import { FC, ReactElement } from "react";

type ChildProps = {
  children: ReactElement | ReactElement[]
}


export const DarkLayout: FC<ChildProps> = ({children}) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
