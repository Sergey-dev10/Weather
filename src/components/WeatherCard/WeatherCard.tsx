import {
  CardWrapper,
  CardMediaWrapper,
  Time,
  Temp,
  Description,
  FeelsLike,
} from "./WeatherCard.styles.ts";
interface WeatherCardProps {
  time: string;
  temp: string;
  feelsLike: string;
  icon?: string;
  description?: string;
}
export const WeatherCard = ({
  time,
  temp,
  feelsLike,
  icon,
  description,
}: WeatherCardProps) => {
  return (
    <CardWrapper>
      <Time variant="body1">
        {time}
      </Time>
      <Temp variant="body1">
        {temp}
      </Temp>
      <CardMediaWrapper image={icon} />
      <Description variant="body1">
        {description}
      </Description>
      <FeelsLike variant="body1">
        Feels Like: {feelsLike}
      </FeelsLike>
    </CardWrapper>
  );
};
