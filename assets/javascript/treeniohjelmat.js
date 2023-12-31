// Haetaan lomakkeen elementit
const treeniForm = document.getElementById("treeni-form");
const ageSelect = document.getElementById("age");
const goalSelect = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const errorMessage = document.getElementById("error-message");
const resultTable = document.getElementById("result-table");

// Lisätään kuuntelija lomakkeen lähettämiseen
treeniForm.addEventListener("submit", generateTrainingPlan);

// Luo treeniohjelma
function generateTrainingPlan(event) {
    event.preventDefault(); // Estetään lomakkeen lähetys

    // Haetaan valitut vaihtoehdot
    const selectedAge = ageSelect.value;
    const selectedGoal = goalSelect.value;
    const selectedLevel = levelSelect.value;

    // Tyhjennetään aiemmat tulokset taulukosta
    resultTable.innerHTML = "";

    // Tarkistetaan valinnat ja generoidaan taulukko
    if (selectedAge !== "" && selectedGoal === "Lihasmassan kasvattaminen") {
        // Taulukon otsikko
        resultTable.innerHTML += `
            <tr>
                <th>Päivä</th>
                <th>Treeni</th>
            </tr>
        `;

        if (selectedLevel === "Aloittelija") {

            // Treeniohjelma aloittelijalle lihasmassan kasvattamiseen
            const trainingPlan = [
                { day: "Maanantai", workout: "Rinta ja hauikset <br> Penkkipunnerrus: 3 sarjaa x 8 toistoa <br> Vinopenkki: 3 sarjaa x 10 toistoa <br> Hauiskääntö: 3 sarjaa x 10 toistoa <br> Ristikkäistalja: 3 sarjaa x 12 toistoa" },
                { day: "Tiistai", workout: "Lepopäivä" },
                { day: "Keskiviikko", workout: "Jalkapäivä <br> Kyykky: 3 sarjaa x 8 toistoa <br> Maastaveto: 4 sarjaa x 8 toistoa<br>Pakaralihastreeni: 3 sarjaa x 10 toistoa<br>Kävely painojen kanssa: 3 sarjaa x 25 metriä" },
                { day: "Torstai", workout: "Lepopäivä" },
                { day: "Perjantai", workout: "Selkä ja olkapäät <br> Leuanveto: 3 sarjaa x 8 toistoa <br> Kulmasoutu: 3 sarjaa x 10 toistoa <br> Pystypunnerrus: 3 sarjaa x 10 toistoa<br> Vipunosto olkapäille: 3 sarjaa x 12 toistoa" },
                { day: "Lauantai", workout: "Lepopäivä" },
                { day: "Sunnuntai", workout: "Lepopäivä" }
            ];

            // Lisätään taulukon rivit
            trainingPlan.forEach((dayPlan) => {
                resultTable.innerHTML += `
                <tr>
                    <td>${dayPlan.day}</td>
                    <td>${dayPlan.workout}</td>
                </tr>
            `;

            });
        
        } else if (selectedLevel === "Harjaantunut") {

            // Treeniohjelma harjaantuneelle lihasmassan kasvattajalle
            const trainingPlan = [
                { day: "Ohje", workout: "Muista, että liikkeiden suorittamisessa on tärkeää pitää oikea tekniikka ja aloittaa kevyillä painoilla, jos olet aloittelija. On myös hyvä saada ohjausta valmentajalta tai oikealta personal trainerilta liikkeiden oikeaan suoritustapaan." },
                { day: "Maanantai", workout: "Rinta ja hauikset <br> Penkkipunnerrus: 4 sarjaa x 8 toistoa <br> Vinopenkki: 3 sarjaa x 10 toistoa <br> Hauiskääntö: 3 sarjaa x 10 toistoa <br> Ristikkäistalja: 3 sarjaa x 12 toistoa" },
                { day: "Tiistai", workout: "Selkä ja olkapäät <br> Leuanveto: 4 sarjaa x 8 toistoa <br> Kulmasoutu: 3 sarjaa x 10 toistoa <br> Pystypunnerrus: 3 sarjaa x 10 toistoa<br> Vipunosto olkapäille: 3 sarjaa x 12 toistoa" },
                { day: "Keskiviikko", workout: "Lepopäivä" },
                { day: "Torstai", workout: "Jalkapäivä <br> Kyykky: 4 sarjaa x 8 toistoa <br> Maastaveto: 4 sarjaa x 8 toistoa<br>Pakaralihastreeni: 3 sarjaa x 10 toistoa<br>Kävely painojen kanssa: 3 sarjaa x 35 metriä" },
                { day: "Perjantai", workout: "Lepopäivä" },
                { day: "Lauantai", workout: "Koko kehon harjoitus <br> Yhden jalan kyykky: 3 sarjaa x 10 toistoa per jalka<br>Punnerrus tangolla: 4 sarjaa x 8 toistoa<br>Ristikkäistalja: 3 sarjaa x 12 toistoa<br>Vatsalihastreeni: 3 sarjaa x 12 toistoa" },
                { day: "Sunnuntai", workout: "Lepopäivä" }
            ];

            // Lisätään taulukon rivit
            trainingPlan.forEach((dayPlan) => {
                resultTable.innerHTML += `
                <tr>
                    <td>${dayPlan.day}</td>
                    <td>${dayPlan.workout}</td>
                </tr>
            `;
            });

        } else if (selectedLevel === "Kokenut") {



            // Treeniohjelma kokeneelle lihasmassan kasvattajalle
            const trainingPlan = [
                { day: "Maanantai", workout: "Rinta ja hauikset <br> Penkkipunnerrus: 4 sarjaa x 8 toistoa <br> Vinopenkki: 4 sarjaa x 10 toistoa <br> Hauiskääntö: 4 sarjaa x 10 toistoa <br> Ristikkäistalja: 4 sarjaa x 12 toistoa" },
                { day: "Tiistai", workout: "Selkä ja olkapäät <br> Leuanveto: 4 sarjaa x 8 toistoa <br> Kulmasoutu: 4 sarjaa x 10 toistoa <br> Pystypunnerrus: 4 sarjaa x 10 toistoa<br> Vipunosto olkapäille: 4 sarjaa x 12 toistoa" },
                { day: "Keskiviikko", workout: "Jalkapäivä <br> Kyykky: 4 sarjaa x 8 toistoa <br> Maastaveto: 4 sarjaa x 8 toistoa<br>Pakaralihastreeni: 4 sarjaa x 10 toistoa<br>Kävely painojen kanssa: 3 sarjaa x 50 metriä" },
                { day: "Torstai", workout: "Lepopäivä" },
                { day: "Perjantai", workout: "Kädet ja vatsalihakset <br> Hauiskääntö: 4 sarjaa x 8 toistoa<br>Ojentajapunnerrus taljalla: 4 sarjaa x 8 toistoa<br>Vatsalihastreeni: 4 sarjaa x 12 toistoa" },
                { day: "Lauantai", workout: "Koko kehon harjoitus <br> Yhden jalan kyykky: 4 sarjaa x 10 toistoa per jalka<br>Punnerrus tangolla: 4 sarjaa x 8 toistoa<br>Ristikkäistalja: 4 sarjaa x 12 toistoa<br>Vatsalihastreeni: 4 sarjaa x 12 toistoa" },
                { day: "Sunnuntai", workout: "Lepopäivä" }
            ];

            // Lisätään taulukon rivit
            trainingPlan.forEach((dayPlan) => {
                resultTable.innerHTML += `
                <tr>
                    <td>${dayPlan.day}</td>
                    <td>${dayPlan.workout}</td>
                </tr>
            `;
            });
        }

    } else {
        // Jos Treeniohjelmaa ei ole saatavilla näytä sähköpostilomake
        resultTable.innerHTML = `
            <tr>
                <td colspan='2'>
                    Treeniohjelmaa ei ole vielä saatavilla valituilla vaihtoehdoilla. Syötä sähköpostiosoitteesi, niin ilmoitamme sinulle, kun treeniohjelma on saatavilla 😊.
                </td>
            </tr>
            <tr>
                <td colspan='2'>
                    <form id="email-form"> 
                        <input type="email" id="email" placeholder="Syötä sähköpostiosoitteesi" required>
                        <button type="submit" id="send-button">Lähetä</button>
                    </form>
                </td>
            </tr>
        `;

        // Lisää kuuntelija sähköpostilomakkeelle
        const emailForm = document.getElementById("email-form");
        emailForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("email");
            emailInput.value = ""; // Pyyhi sähköpostiosoite
            alert("Kiitos! 😊"); // Ilmoitus "Kiitos!"
        });
    }
}