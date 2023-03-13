import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { Link, MailLink } from '~/components/links'
import { PrivacyPolicyMapConsentInfo } from '~/components/maps/MapConsent/PrivacyPolicyMapConsentInfo'
import { Prose } from '~/components/typography'

const PrivacyPolicyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Datenschutzerklärung" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <Prose className="prose-th:pr-2 prose-th:pb-2 lg:mt-6">
          <h1>Datenschutzerklärung</h1>
          <h2>Einleitung</h2>
          <p>
            Mit den nachfolgenden Informationen wollen wir Ihnen einen Überblick über die
            Verarbeitung Ihrer personenbezogenen Daten auf unserer Website www.xhain-beruhigt.berlin
            (nachfolgend „Website“ genannt) geben. Wir wollen Sie ebenfalls über Ihre Rechte aus dem
            Datenschutzrecht informieren. Die Verarbeitung Ihrer personenbezogenen Daten durch uns
            erfolgt stets im Einklang mit der Europäischen Datenschutzgrundverordnung (nachfolgend
            „DSGVO“ genannt) sowie allen geltenden landesspezifischen Datenschutzbestimmungen, wie
            u.a. dem Berliner Datenschutzgesetz.
          </p>
          <h2>Inhaltsverzeichnis</h2>{' '}
          <ul>
            <li>
              <Link href="#m1">Verantwortlichkeit</Link>
            </li>
            <li>
              <Link href="#m2">Einsatz von Drittdiensten</Link>
            </li>
            <li>
              <Link href="#m3">Bereitstellung des Informationsportals</Link>
            </li>
            <li>
              <Link href="#m4">Verwendung des Kartendienstes Mapbox</Link>
            </li>
            <li>
              <Link href="#m5">Kontaktmöglichkeiten</Link>
            </li>
            <li>
              <Link href="#m6">Ihre Rechte</Link>
            </li>
          </ul>
          <h2 id="m1">Verantwortlichkeit</h2>
          <p>
            <strong>Verantwortlich im Sinne der DSGVO</strong>
          </p>
          <p>
            Bezirksamt Friedrichshain-Kreuzberg von Berlin, vertreten durch die Bezirksstadträtin
            Frau Annika Gerold
            <br />
            Anschrift: Petersburger Straße 86-90, 10247 Berlin
            <br />
            Tel.: +49 30 90298 2169
            <br />
            E-Mail: <MailLink>stadtraetin.gerold@ba-fk.berlin.de</MailLink>
          </p>
          <p>
            <strong>Datenschutzbeauftragter</strong>
          </p>
          <p>
            Der/die Datenschutzbeauftragte des Bezirksamtes Friedrichshain-Kreuzberg ist:{' '}
            <Link href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/beauftragte/datenschutz/">
              Behördlicher Datenschutzbeauftragter
            </Link>
            <br />
            Anschrift: Frankfurter Allee 35/37 10247 Berlin
            <br />
            Tel.:+49 30 90298 4135
            <br />
            E-Mail: <MailLink>datenschutz@ba-fk.berlin.de</MailLink>
          </p>
          <h2 id="m2">Einsatz von Drittdiensten</h2>
          <p>
            Für bestimmte Funktionen und Services auf unserer Website setzen wir Dienste von
            Drittanbietern ein. Die konkreten Dienste können jeweils den entsprechenden Kapiteln
            entnommen werden.
          </p>
          <p>
            Teilweise setzen wir Dienstleister ein, die ihren Sitz in einem Drittland haben, also
            außerhalb der EU. Wir übermitteln Daten nur in Drittländer, in denen ein angemessenes
            Datenschutzniveau bzw. geeignete Garantien i. S. d. Art. 44-49 DSGVO vorliegen. Sie
            haben das Recht, eine Kopie der von uns getroffenen geeigneten Garantien anzufordern.
            Schreiben Sie uns dazu gerne eine E-Mail an die in diesen Datenschutzhinweisen genannte
            E-Mail-Adresse.
          </p>
          <h2 id="m3">Bereitstellung des Informationsportals</h2>
          <h3>Allgemeine Informationen</h3>
          <p>
            Bei Besuch unserer Website werden automatisch Daten verarbeitet, die Ihr Browser an
            unseren Server übermittelt. Diese allgemeinen Daten und Informationen werden in den
            Logfiles des Servers gespeichert (in sog. „Server-Logfiles“). Erfasst werden können die
          </p>
          <ul className="list-disc">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem sowie Angaben zum Endgerät</li>
            <li>Referrer URL (zuvor besuchte Website)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>Nutzungsdaten</li>
            <li>IP-Adresse</li>
            <li>Angaben zum betrachteten Kartenausschnitt</li>
          </ul>
          <h3>Zweck der Verarbeitung</h3>
          <p>
            Bei der Nutzung dieser allgemeinen Daten und Informationen ziehen wir keine Rückschlüsse
            auf Ihre Person. Zu den von uns verfolgten Zwecken gehört insbesondere:
          </p>
          <ul>
            <li>die Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
            <li>Übermittlung des angefragten Kartenmaterials</li>
            <li>die Aufklärung von Missbrauchs- oder Betrugshandlungen,</li>
            <li>Problemanalysen im Netzwerk, sowie</li>
            <li>die Auswertung der Systemsicherheit und ‑stabilität.</li>
          </ul>
          <h3>Rechtsgrundlage</h3>
          <p>
            Die Rechtsgrundlage für die Datenverarbeitung ist die Wahrnehmung einer Aufgabe, die im
            öffentlichen Interesse liegt und uns übertragen wurde, gemäß Art. 6 Abs. 1 S. 1 lit. e)
            DSGVO.
          </p>
          <h3>Speicherdauer</h3>
          <p>
            Die Logfiles werden aus Sicherheitsgründen durch den Auftragsverarbeiter (siehe unten,
            z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal
            30 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu
            Beweiszwecken erforderlich ist, werden bis zur endgültigen Klärung der Angelegenheit
            aufbewahrt.
          </p>
          <h3>Empfänger personenbezogener Datens</h3>
          <p>Wir setzen folgende Dienstleister ein:</p>
          <table>
            <tbody>
              <tr>
                <th className="">Anbieter</th>
                <th>Anschrift</th>
                <th>Drittland</th>
                <th className="w-36">Geeignete Garantie</th>
                <th>Zweck</th>
              </tr>
              <tr>
                <td>FixMyCity GmbH</td>
                <td>Karlsgartenstraße 12, 12049 Berlin</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td>Bereitstellung und Entwicklung des Dienstes</td>
              </tr>
              <tr>
                <td>IONOS SE</td>
                <td>Elgendorfer Str. 57, 56410 Montabaur, Deutschland</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td>Hosting der Website und Bereitstellung der Inhalte</td>
              </tr>
            </tbody>
          </table>
          <h2 id="m4">Verwendung des Kartendienstes Mapbox</h2>
          <h3>Allgemeine Informationen</h3>
          <p>
            Auf unserem Portal wird verschiedenes Kartenmaterial dargestellt. Dazu nutzen wir das
            Online-Kartentool des amerikanischen Software-Unternehmens Mapbox Inc. 740 15th Street
            NW, 5th Floor, District of Columbia 20005, USA.
          </p>
          <p>
            Die Karteninhalte werden direkt von Mapbox an Ihren Browser übermittelt und in unser
            Portal eingebunden. Dabei werden unter anderem Ihre IP-Adresse an Mapbox weitergeleitet
            und dort gespeichert. Mapbox erfasst dazu noch weitere Informationen. Konkret handelt es
            sich neben der IP-Adresse dabei noch um das Betriebssystem, Inhalt der Abfrage,
            eingeschränkte Standorts- und Nutzungsdaten, die URL der besuchten Website,
            Browserinformationen sowie Datum und Uhrzeit des Website-Besuchs. Hierzu nutzt Mapbox
            auch Cookies.
          </p>
          <p>
            Es kann sein, dass Mapbox diese Daten an Dritte weitergibt in Fällen, in denen Mapbox
            ein anderes Unternehmen explizit beauftragt oder die Weitergabe rechtlich vorgeschrieben
            ist.
          </p>
          <h3>Zweck der Verarbeitung</h3>
          <p>
            Die Rechtsgrundlage für die Verwendung des Mapbox-Kartendienstes ist Ihre Einwilligung
            gemäß Art. 6 Abs. 1 S. 1 lit. a) DSGVO i.V.m. Art. 7 und 8 DSGVO. Sie können Ihre
            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Für die Nutzung von Mapbox werden Daten auch in den USA verarbeitet. Wir weisen darauf
            hin, dass dort nach Auffassung des Europäischen Gerichtshofs derzeit nicht das gleiche
            Niveau im Datenschutz besteht wie in der Europäischen Union. Dies kann mit verschiedenen
            Risiken für die Rechtmäßigkeit und Datensicherheit einhergehen.
          </p>
          <p>
            Als rechtliche Grundlage für die Verarbeitung in Drittländern außerhalb des Europäischen
            Wirtschaftsraums hat Mapbox sog. Standarddatenschutzklauseln der EU-Kommission
            abgeschlossen. Diese Klauseln verpflichten Mapbox, das europäische Datenschutzniveau
            auch außerhalb der EU sicherzustellen. Den Beschluss der EU-Kommission zum Erlass der
            Standarddatenschutzklauseln können Sie hier einsehen: <br />
            <Link
              blank
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=EN"
            >
              https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=EN
            </Link>
          </p>
          <p>
            Weitere Informationen zur Datenverarbeitung durch Mapbox finden Sie in der
            Datenschutzerklärung des Unternehmens:
            <br />
            <Link blank href="https://www.mapbox.com/legal/privacy">
              mapbox.com/legal/privacy
            </Link>
          </p>
          <div className="border border-blue-300 px-3">
            <PrivacyPolicyMapConsentInfo />
          </div>
          <h3>Speicherdauer</h3>
          <p>
            Die IP-Adresse wird aus Sicherheitsgründen durch Mapbox für 30 Tage gespeichert.
            Zufällig generierte IDs, mit denen die Nutzung der API analysiert werden, werden nach 36
            Monaten gelöscht.
          </p>
          <h2 id="m5">Kontaktmöglichkeiten</h2>
          <h3>Allgemeine Informationen</h3>
          <p>
            Über unser Portal weisen wir auf die Möglichkeit hin, uns per E-Mail zu kontaktieren.
          </p>
          <p>
            Im Rahmen der Kontaktaufnahme und Beantwortung Ihrer Anfrage verarbeiten wir folgende
            personenbezogene Daten von Ihnen:
          </p>
          <ul>
            <li>Name</li>
            <li>E-Mail</li>
            <li>Datum und Zeit der Anfrage</li>
            <li>Meta-Daten der E-Mail</li>
            <li>
              Weitere personenbezogene Daten, die Sie uns im Rahmen der Kontaktaufnahme mitteilen.
            </li>
          </ul>
          <h3>Zweck der Verarbeitung</h3>
          <p>
            Wir verarbeiten Ihre Daten zur Beantwortung Ihrer Anfrage sowie andere daraus
            resultierende Sachverhalte.
          </p>
          <h3>Rechtsgrundlage</h3>
          <p>
            Die Rechtsgrundlage für die Datenverarbeitung ist ist Ihre Einwilligung gemäß Art. 6
            Abs. 1 S. 1 lit. a) DSGVO i.V.m. Art. 7 und 8 DSGVO. Sie können Ihre Einwilligung
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>{' '}
          <h3>Speicherdauer</h3>
          <p>
            Wir löschen Ihre personenbezogenen Daten, sobald sie für die Erreichung des Zweckes der
            Erhebung nicht mehr erforderlich sind. Im Rahmen von Kontaktanfragen ist dies
            grundsätzlich dann der Fall, wenn sich aus den Umständen ergibt, dass der konkrete
            Sachverhalt abschließend bearbeitet ist. Darüber hinaus speichern wir E-Mails, sofern
            und solange sie gesetzlichen Aufbewahrungsfristen unterliegen.
          </p>
          <h2 id="m6">Ihre Rechte</h2>
          <p>Sie haben gegenüber des Bezirksamts Friedrichshain-Kreuzberg</p>
          <ul>
            <li>
              das Recht auf Auskunft über die Verarbeitung Ihrer personenbezogenen Daten (dazu
              gehören auch Auskünfte über Zweck, Empfänger und Dauer der Speicherung) nach Art. 15
              DSGVO,
            </li>
            <li>das Recht auf Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
            <li>das Recht auf Löschung gemäß Art. 17 DSGVO,</li>
            <li>
              das Recht auf Einschränkung der Verarbeitung und Datenübertragbarkeit (Art. 18 und 20
              DSGVO) sowie
            </li>
            <li>
              das Recht der Verarbeitung Ihrer Daten jederzeit zu widersprechen (Art. 21 DSGVO).
              Legen Sie Widerspruch ein, werden Ihre personenbezogenen Daten nicht mehr verarbeitet.
              Eine Ausnahme besteht, soweit zwingende schutzwürdige Gründe bestehen, die gegenüber
              Ihren Interessen überwiegen.
            </li>
          </ul>
          <p>
            Eine einmal erteilte Einwilligung kann jederzeit gegenüber der/dem Verantwortlichen mit
            Wirkung für die Zukunft widerrufen werden. Die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt. In
            diesem Fall können wir Ihnen möglicherweise mit Ihrem Anliegen nicht mehr helfen. Der
            Widerruf ist zu richten an den behördlichen Datenschutzbeauftragten an die oben genannte
            Kontaktadresse.
          </p>
          <p>
            Zur Wahrung aller in dieser Ziffer genannten Rechte kann sich jeder Betroffene an
            den/die Datenschutzbeauftragte/n des Bezirksamts Friedrichshain-Kreuzberg (siehe oben)
            wenden.
          </p>
          <p>
            Zudem können Sie sich - wenn Sie der Auffassung sind, dass das Bezirksamt
            Friedrichshain-Kreuzberg bei der Verarbeitung Ihrer Daten datenschutzrechtliche
            Vorschriften nicht beachtet hat - mit einer Beschwerde an die zuständige
            Aufsichtsbehörde wenden (Art. 77 DSGVO). Betroffene können ihre Beschwerde an die
            Behörde ihres Wohnsitzes, grundsätzlich aber auch an jede andere
            Datenschutzaufsichtsbehörde richten. Die zuständige Datenschutzaufsichtsbehörde für die
            Senatskanzlei ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, die
            sie wie folgt kontaktieren können:
          </p>
          <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
          <p>
            Anschrift: Alt-Moabit 60, 10555 Berlin
            <br />
            Tel.: +49 30 13889-0
            <br />
            E-Mail: <MailLink>mailbox@datenschutz-berlin.de</MailLink>
          </p>
        </Prose>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const Head: HeadFC = () => <MetaTags title="Dateschutzerklärung" noindex />
