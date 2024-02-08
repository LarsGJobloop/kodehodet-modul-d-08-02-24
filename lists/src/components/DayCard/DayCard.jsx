/**
 * 
 * @param {{
* data: {id: number, name: string, imageUrl: string}
* primary: boolean
* }} properties 
* @returns 
*/
export function DayCard(properties) {
  const { data, primary } = properties

  const color = primary ? "cornflowerblue" : "coral"

  return (
    <div style={{ backgroundColor: color }}>
      <p>{data.name}</p>
      <img width="100px" src={data.imageUrl} alt={`Color of ${data.name}`} />
    </div>
  )
}
