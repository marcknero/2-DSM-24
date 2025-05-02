
import { BallProps } from "../types"
import styled from "styled-components"

export const Ball = ({ label }: BallProps) => (
    <ButtonBall>{label}</ButtonBall>
)
    

  const ButtonBall = styled.button`
  background-color: rgba(35, 187, 29, 0.88);
  color: white;
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  &:hover {
    cursor: default;
    }
`
