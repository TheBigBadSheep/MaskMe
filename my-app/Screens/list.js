import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../Design/stylesheet';
import { Linking } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default List = () => {
        return (

                <View style={styles.screen}>

                        {/* upperContainer ist der mit Logo und Hinweisbalken */}
                        <View style={styles.upperContainer}>
                                <Image style={{ height: '27%', width: '14%', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 20, }} source={require('../Design/pics/apple.png')} />
                                <Text style={{ flex: 1, fontFamily: 'Lobster_400Regular', color: '#B2E0E6', fontSize: 50, fontWeight: 'normal', alignSelf: 'flex-start', marginLeft: '4%', paddingBottom: 10, }}>Liste</Text>
                                <View style={styles.textbalken}>
                                        <Text style={styles.weisserText}>Maskenpflichtige Orte, Straßen und Ausnahmen, weitergehend als Beförderungsmittel</Text>
                                </View>
                        </View>

                        {/* MittlererContainer ist hier für die Aufzählung von Orten */}
                        <View style={styles.middleContainerList}>
                                <ScrollView style={styles.scrollView}>

                                        {/*Dabei ist immer Ein Punkt inklusive seinem Pfeil in einer View, damit die nebeneinander sein können */}
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />

                                                {/*Hier ist quasi Text in Text, damit die Hauptwörter ne andere Farbe haben können */}
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steindamm: </Text>Im räumlichen Bereich von der Hausnummer 33 bis zum Steintorplatz, täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>


                                        {/*Jetzt kommt 36 mal das gleiche nur mit anderen Punkten */}
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Stralsunder Straße: </Text>Täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steintorplatz: </Text>Einschließlich der angrenzenden öffentlichen Wege, Straßen und Plätze, abgegrenzt durch die Bahnüberführung der Straße Steintordamm, dem Gebäude des Museums für Kunst und Gewerbe, dem Gebäude des Zentralen Omnibusbahnhofs, dem Gebäude mit der Hausnummer Steindamm 2, dem Gebäude mit der Hausnummer Steindamm 1, den Gebäuden mit den Hausnummern Steintorplatz 3 und Kirchenallee 57 sowie dem Gebäude des Hauptbahnhofs, täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Ballindamm: </Text>Im räumlichen Bereich vor dem Gebäude mit der Hausnummer 40, abgegrenzt durch die Straßen Ballindamm und Bergstraße, täglich von 10 Uhr bis 20 Uhr</Text>
                                        </View>

                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Große Freiheit: </Text>Im räumlichen Bereich von der Hausnummer 1 bis zur Hausnummer 47, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Hamburger Berg: </Text>Im räumlichen Bereich der Hausnummern 1 bis 39, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Talstraße: </Text>Im räumlichen Bereich der Hausnummern 1 bis 36, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Hans-​Albers-​Platz: </Text>Einschließlich der Friedrichstraße im räumlichen Bereich zwischen und einschließlich den Hausnummern 11 beziehungsweise 24 bis 21 beziehungsweise 28, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Reeperbahn: </Text>Einschließlich der Plätze Nobistor und Spielbudenplatz, abgegrenzt durch den Millerntorplatz, die Straße Zirkusweg, die Holstenstraße und den Finkenpark sowie in der Straße Spielbudenplatz im räumlichen Bereich der Hausnummern 1 bis 31, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Schulterblatt: </Text>Im räumlichen Bereich zwischen den Straßen Susannenstraße und Rosenhofstraße, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 12 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>

                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Alma-​Wartenberg-​Platz: </Text>Einschließlich der Bahrenfelder Straße im räumlichen Bereich zwischen und einschließlich den Hausnummern 135 beziehungsweise 146 und den Hausnummern 183 beziehungsweise 188, der Kleinen Rainstraße im räumlichen Bereich bis zu und einschließlich den Hausnummern 3 beziehungsweise 6, der Nöltingstraße im räumlichen Bereich bis zu und einschließlich den Hausnummern 5 beziehungsweise 12, der Friedensallee im räumlichen Bereich bis zu und einschließlich den Hausnummern 7 beziehungsweise 14 sowie der Bergiusstraße im räumlichen Bereich bis zu der Hausnummer 7, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Hohenesch: </Text>Im räumlichen Bereich von und einschließlich der Hausnummern 1 beziehungsweise 6 bis zur Bahrenfelder Straße, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von 18 Uhr bis 4 Uhr am Folgetag</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Ottenser Hauptstraße: </Text>Im räumlichen Bereich der Hausnummern 2 bis 27, montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Umfeld des Bahnhofs Altona: </Text>Im räumlichen Bereich der Präsident-​Krahn-​Straße zwischen und einschließlich der Hausnummern 1 und 8 beidseitig, Max-​Brauer-​Allee zwischen und einschließlich der Hausnummern 51 und 53 auf der zum Bahnhof gelegenen Gehwegseite (westlich), zwischen und einschließlich der Gebäude Paul-​Nevermann-​Platz 5 und Ottenser Hauptstraße 1a beidseitig, zwischen und einschließlich der Gebäude Ottenser Hauptstraße 1 und Scheel-​Plessen-​Straße 9, zwischen und einschließlich der Gebäude Scheel-​Plessen-​Straße 9 bis Paul-​Nevermann-​Platz 19, montags bis samstags, jeweils von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Kirchenallee: </Text>Im räumlichen Bereich zwischen Steintorplatz, Ernst-​Merck-​Straße, Hachmannplatz und Heidi-​Kabel-​Platz täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Heidi-​Kabel-​Platz: </Text>Im räumlichen Bereich vor dem Gebäude Ernst-​Merck-​Straße 9, der Kirchenallee und dem Hachmannplatz täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Hachmannplatz: </Text>Im räumlichen Bereich vor dem Hauptbahnhof, abgegrenzt vom Steintorplatz, der Kirchenallee und dem Heidi-​Kabel-​Platz täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steintordamm: </Text>Im räumlichen Bereich der Steintorbrücke zwischen Steintorplatz und Steintorwall täglich von 8 Uhr bis 22 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Steintorwall: </Text>Im räumlichen Bereich zwischen Mönckebergstraße 1 und Georgsplatz/Ernst-​Merck-​Straße montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Mönckebergstraße: </Text>Im räumlichen Bereich der Hausnummern 1 bis 31 zwischen Glockengießerwall/Steintorwall und Rathausmarkt einschließlich der Tunnelanlage zum Hauptbahnhof montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Spitalerstraße: </Text>Im räumlichen Bereich zwischen Steintorwall und Mönckebergstraße montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Barkhof: </Text>Im räumlichen Bereich zwischen Spitalerstraße und Mönckebergstraße, montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Gerhart-​Hauptmann-​Platz: </Text>Im räumlichen Bereich zwischen Mönckebergstraße und Rosenstraße beziehungsweise Kleine Rosenstraße, montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Ida-​Ehre-​Platz: </Text>Im räumlichen Bereich zwischen Mönckebergstraße und Steinstraße, montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Lange Mühren: </Text>Im räumlichen Bereich zwischen Spitalerstraße und Mönckebergstraße montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Bergstraße: </Text>Im räumlichen Bereich der Hausnummern 9 bis 28 zwischen Ballindamm und Mönckebergstraße montags bis sonnabends, jeweils von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Neumühlen: </Text>Im räumlichen Bereich ab der Einmündung Kaistraße/Große Elbstraße in westlicher Richtung, einschließlich dem wasserseitigen Westkai sowie dem Anleger Neumühlen/Museumshafen, der Großen Elbstraße im räumlichen Bereich zwischen Hausnummer 281 (Fahrradstraße, einschließlich Kehre) und Hausnummer 143a (Dockland/Van-​der-​Smissen-​Straße) einschließlich dem parallel verlaufenden wasserseitigen Weg sowie dem Ostkai, der Straße Övelgönne einschließlich dem räumlichen Bereich um das Lüfterbauwerk, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 18 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>An der Alster und Ferdinandstor: </Text>Von der Straße Schwanenwik bis zur Bahnbrücke (Ferdinandstor) sowie auf der Kennedybrücke (einschließlich Brückenbauwerk und der angrenzenden Grünanlage bis zu den Bahngleisen) und der Gurlittinsel; jeweils die wasserseitig gelegenen Fuß- und Radwege der öffentlichen Grünanlagen einschließlich des Uferrandes, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 18 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Eduard-​Rhein-​Ufer: </Text>Schöne Aussicht, Fährhausstraße im räumlichen Bereich der Hausnummern 2 bis 20, Herbert-​Weichmann-​Straße im räumlichen Bereich ab Hausnummer 65 beidseitig bis Bellevue jeweils einschließlich der angrenzenden öffentlichen Grünanlagen bis zum Uferrand, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 18 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Krugkoppelbrücke: </Text>Straße Fernsicht bis zu und einschließlich Hausnummern 1 bis 7 einschließlich der Straße Leinpfad bis zu und einschließlich Hausnummer 1 sowie der Fernsichtbrücke bis zur Einmündung Bellevue, der Einmündung Fernsichtbrücke, in der Straße Bellevue bis zu und einschließlich Hausnummern 47 bis 1 einschließlich der Sierichstraße bis zu und einschließlich Hausnummer 4 jeweils einschließlich der angrenzenden öffentlichen Grünanlagen bis zum Uferrand, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 18 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Mühlenkamp: </Text>Im räumlichen Bereich der Hausnummern 1 bis 21 und 2 bis 18, zwischen Körnerstraße und Gertigstraße, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 18 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Jungfernstieg: </Text>Von Hausnummern 1 bis 32 einschließlich dem Alsteranleger, sonnabends, sonntags und an Feiertagen in der Zeit von 10 Uhr bis 20 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Goldbekufer: </Text>Zwischen Barmbeker Straße und Goldbekplatz/Moorfurthweg, sonnabends in der Zeit von 8 Uhr bis 15 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Geibelstraße: </Text>Zwischen Semperstraße und Goldbekufer, sonnabends in der Zeit von 8 Uhr bis 15 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Forsmannstraße: </Text>Zwischen Semperstraße und Goldbekufer, sonnabends in der Zeit von 8 Uhr bis 15 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Goldbekplatz: </Text>Sonnabends in der Zeit von 8 Uhr bis 15 Uhr</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="arrow-forward-outline" size={22} color='#B2E0E6' />
                                                <Text style={styles.listText}><Text style={styles.listTextBeginning}>Moorfurthweg: </Text>Sonnabends in der Zeit von 8 Uhr bis 15 Uhr</Text>
                                        </View>

                                        <View style={styles.listPointBoxHinweis}>
                                                <Ionicons name="alert-circle-outline" size={22} style={styles.listIcons} />
                                                <Text style={styles.listText}><Text style={styles.listHinweis}>Bitte beachte: </Text>Die Polizei kann im Einzelfall auf öffentlichen Wegen, Straßen oder Plätzen eine räumlich begrenzte Maskenpflicht anordnen, wenn dies aus Infektionsschutzgründen erforderlich ist. Dies ist insbesondere der Fall, wenn das Abstandsgebot durch einen erheblichen Teil der anwesenden Personen nicht eingehalten wird oder aufgrund der räumlichen Verhältnisse oder der Anzahl der anwesenden Personen nicht eingehalten werden kann.</Text>
                                        </View>
                                        <View style={styles.listPointBox}>
                                                <Ionicons name="reader-outline" style={styles.listIcons} size={22} />

                                                {/*Hier ist noch n Link hinter dem Wort 'Website' hinterlegt, damit man direkt auf die Quelle kommt. */}
                                                <Text style={styles.listText}><Text style={styles.listHinweis}>Quelle:</Text> Die Daten für maskenpflichtige Orte, Straßen und Ausnahmen wurden aus der offiziellen <Text style={{ color: '#B2E0E6' }}
                                                        onPress={() => Linking.openURL('https://www.hamburg.de/coronavirus/aktuelles/14435302/2020-10-10-maskenpflicht-an-oeffentlichen-plaetzen/')}>
                                                        Website
                                                </Text> der Stadt Hamburg entnommen. Es wird keine Garantie für Korrektheit und/oder Aktualität der Angaben übernommen. Stand: 26. Mai 2021</Text>
                                        </View>



                                </ScrollView>
                                <View>


                                </View>
                        </View>









                </View>
        );
};