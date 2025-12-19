import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QRCode() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-6">
        <svg
            data-ai-hint="qr code"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H50V50H0V0ZM10 10V40H40V10H10Z" fill="black"/>
            <path d="M20 20H30V30H20V20Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M100 0H150V50H100V0ZM110 10V40H140V10H110Z" fill="black"/>
            <path d="M120 20H130V30H120V20Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 100H50V150H0V100ZM10 110V140H40V110H10Z" fill="black"/>
            <path d="M20 120H30V130H20V120Z" fill="black"/>
            <path d="M60 0H70V10H60V0ZM80 0H90V10H80V0ZM60 20H70V30H60V20ZM60 40H70V50H60V40ZM80 40H90V50H80V40ZM60 60H70V70H60V60ZM80 60H70V70H80V60ZM90 60H100V70H90V60ZM110 60H120V70H110V60ZM130 60H140V70H130V60ZM140 70H150V80H140V70ZM140 90H150V100H140V90ZM120 110H130V120H120V110ZM140 130H150V140H140V130ZM110 140H120V150H110V140ZM90 140H100V150H90V140ZM70 140H80V150H70V140ZM60 130H70V140H60V130ZM60 110H70V120H60V110ZM60 90H70V100H60V90ZM80 80H90V90H80V80ZM100 80H110V90H100V80ZM120 80H130V90H120V80ZM100 100H110V110H100V100ZM80 120H90V130H80V120ZM90 20H100V30H90V20ZM110 20H120V30H110V20ZM130 20H140V30H130V20ZM140 10H150V20H140V10Z" fill="black"/>
        </svg>
      </CardContent>
    </Card>
  );
}
