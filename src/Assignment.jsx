export const Assignment = () => {
  return (
    <div className="list-disc">
      <ol className="list-decimal list-inside">
        <li>
          Vytvoř formář: 1 textový input na vložení názvu města a tlačítko submit
        </li>
        <li>
          Po submitu zavolat endpoint OpenWeatherAPI a získat tempotu
          <ul className="list-disc ml-7">
            <li>
              <a className="underline" href="https://openweathermap.org/current#builtin" target={"_blank"}>
                https://openweathermap.org/current#builtin
              </a>
            </li>
            <li>
              Sekce "Built-in API request by city name"
            </li>
            <li>
              APIKEY: XXX (pošleme zvlášť)
            </li>
          </ul>
        </li>
        <li>
          Zobrazit Město + Teplotu
          <ul className="list-disc ml-7">
            <li>
              Brno, 35C
            </li>
          </ul>
        </li>
        <li>
          Bonus: Zobraz jako pole
          <ul className="list-disc ml-7">
            <li>
              Brno, 35C
            </li>
            <li>
              Praha, 35C
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
