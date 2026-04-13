import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Calendar, Users, Zap } from "lucide-react";
import { Link } from "wouter";

const DESCOBERTAS = [
  {
    nome: "Penicilina",
    ano: 1928,
    descobridor: "Alexander Fleming",
    impacto: "Revolucionou o tratamento de infecções bacterianas, salvando milhões de vidas",
    descricao: "A penicilina foi a primeira descoberta de um antibiótico, transformando completamente a medicina moderna. Antes disso, infecções simples eram frequentemente fatais.",
    aplicacoes: ["Infecções bacterianas", "Cirurgias", "Ferimentos de guerra"],
    prêmio: "Prêmio Nobel de Fisiologia ou Medicina (1945)"
  },
  {
    nome: "Insulina",
    ano: 1921,
    descobridor: "Frederick Banting e Charles Best",
    impacto: "Transformou o diabetes de uma doença fatal em uma condição controlável",
    descricao: "A insulina permitiu que diabéticos vivessem vidas normais e produtivas. Antes de sua descoberta, o diabetes tipo 1 era praticamente uma sentença de morte.",
    aplicacoes: ["Diabetes tipo 1", "Diabetes tipo 2", "Cetoacidose diabética"],
    prêmio: "Prêmio Nobel de Fisiologia ou Medicina (1923)"
  },
  {
    nome: "Vacina contra Poliomielite",
    ano: 1955,
    descobridor: "Jonas Salk",
    impacto: "Erradicou uma das doenças mais devastadoras do século XX",
    descricao: "A poliomielite paralisava milhares de crianças anualmente. A vacina de Salk praticamente eliminou a doença em países desenvolvidos.",
    aplicacoes: ["Prevenção de poliomielite", "Campanhas de vacinação global"],
    prêmio: "Reconhecimento internacional"
  },
  {
    nome: "Estatinas (Atorvastatina)",
    ano: 1987,
    descobridor: "Akira Endo",
    impacto: "Reduz o colesterol e previne doenças cardiovasculares em milhões de pessoas",
    descricao: "As estatinas revolucionaram a prevenção de doenças do coração, uma das principais causas de morte em países desenvolvidos.",
    aplicacoes: ["Colesterol alto", "Prevenção de infarto", "Prevenção de AVC"],
    prêmio: "Reconhecimento científico internacional"
  },
  {
    nome: "Terapia Antirretroviral (ART)",
    ano: 1996,
    descobridor: "Múltiplos pesquisadores",
    impacto: "Transformou o HIV de uma sentença de morte em uma doença crônica controlável",
    descricao: "A combinação de medicamentos antirretrovirais permitiu que pessoas com HIV vivessem vidas normais e produtivas, com expectativa de vida próxima ao normal.",
    aplicacoes: ["Infecção por HIV", "AIDS", "Prevenção de transmissão"],
    prêmio: "Avanço revolucionário em saúde pública"
  },
  {
    nome: "Imunossupressores (Ciclosporina)",
    ano: 1983,
    descobridor: "Jean-François Borel",
    impacto: "Possibilitou transplantes de órgãos bem-sucedidos",
    descricao: "A ciclosporina permitiu que transplantes de órgãos se tornassem viáveis, salvando milhares de vidas através de transplantes de rim, coração e fígado.",
    aplicacoes: ["Prevenção de rejeição de transplante", "Doenças autoimunes"],
    prêmio: "Prêmio Lasker (1987)"
  }
];

export default function Descobertas() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-800">
            Farmácia & Pesquisa
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Descobertas Farmacêuticas Histórias
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Conheça as descobertas que revolucionaram a medicina e salvaram milhões de vidas ao redor do mundo.
          </p>
        </div>
      </section>

      {/* Descobertas Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESCOBERTAS.map((descoberta, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{descoberta.nome}</h2>
                  <p className="text-blue-100 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {descoberta.ano}
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4" />
                      <strong>Descobridor:</strong> {descoberta.descobridor}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-500" />
                      Impacto
                    </h3>
                    <p className="text-gray-700 font-semibold text-lg">{descoberta.impacto}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Descrição</h3>
                    <p className="text-gray-700 leading-relaxed">{descoberta.descricao}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Aplicações Clínicas</h3>
                    <ul className="space-y-1">
                      {descoberta.aplicacoes.map((app, i) => (
                        <li key={i} className="text-gray-700 flex gap-2">
                          <span className="text-blue-900">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <strong>{descoberta.prêmio}</strong>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Impacto */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            O Impacto da Pesquisa Farmacêutica
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200">
              <div className="text-4xl font-bold text-blue-900 mb-4">+200M</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vidas Salvas</h3>
              <p className="text-gray-700">
                Estimativas indicam que medicamentos descobertos nos últimos 100 anos salvaram mais de 200 milhões de vidas.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200">
              <div className="text-4xl font-bold text-emerald-500 mb-4">+30 anos</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aumento na Expectativa de Vida</h3>
              <p className="text-gray-700">
                A expectativa de vida global aumentou em mais de 30 anos no século XX, principalmente devido aos avanços farmacêuticos.
              </p>
            </Card>

            <Card className="p-8 border border-gray-200">
              <div className="text-4xl font-bold text-yellow-600 mb-4">+10K</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medicamentos Aprovados</h3>
              <p className="text-gray-700">
                Mais de 10 mil medicamentos foram aprovados globalmente, tratando praticamente todas as doenças conhecidas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seja Parte da Próxima Geração de Descobertas
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            O curso de Farmácia da AlfaUnipac Aimorés prepara profissionais para continuar essa tradição de inovação e descoberta.
          </p>
          <Link href="/">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 font-semibold">
              Voltar para Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 O Farmacêutico na Pesquisa Científica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
