import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink, Database, Award, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Referencias() {
  const { user } = useAuth();

  const periodicos = [
    {
      nome: "Nature Reviews Drug Discovery",
      foco: "Descoberta e desenvolvimento de fármacos",
      url: "https://www.nature.com/nrd/",
      issn: "1474-1776"
    },
    {
      nome: "Journal of Medicinal Chemistry",
      foco: "Química medicinal e síntese de fármacos",
      url: "https://pubs.acs.org/journal/jmcmar",
      issn: "0022-2623"
    },
    {
      nome: "Pharmaceutical Research",
      foco: "Pesquisa farmacêutica e tecnologia",
      url: "https://www.springer.com/journal/11095",
      issn: "0724-8741"
    },
    {
      nome: "Drug Discovery Today",
      foco: "Notícias e análises em descoberta de fármacos",
      url: "https://www.drugdiscoverynews.com/",
      issn: "1359-6446"
    }
  ];

  const basesdados = [
    {
      nome: "PubMed",
      descricao: "40+ milhões de citações de literatura biomédica",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      tipo: "Multidisciplinar"
    },
    {
      nome: "Web of Science",
      descricao: "Indexação de artigos científicos com citações",
      url: "https://www.webofscience.com/",
      tipo: "Multidisciplinar"
    },
    {
      nome: "Scopus",
      descricao: "Banco de dados de resumos e citações",
      url: "https://www.scopus.com/",
      tipo: "Multidisciplinar"
    },
    {
      nome: "DrugBank",
      descricao: "Base de dados de fármacos e alvos",
      url: "https://go.drugbank.com/",
      tipo: "Especializada"
    },
    {
      nome: "PubChem",
      descricao: "Banco de dados de compostos químicos",
      url: "https://pubchem.ncbi.nlm.nih.gov/",
      tipo: "Especializada"
    },
    {
      nome: "ClinicalTrials.gov",
      descricao: "Registro de ensaios clínicos",
      url: "https://clinicaltrials.gov/",
      tipo: "Especializada"
    }
  ];

  const organizacoes = [
    {
      nome: "FDA (Food and Drug Administration)",
      pais: "Estados Unidos",
      descricao: "Agência reguladora de medicamentos",
      url: "https://www.fda.gov/",
      tipo: "Regulatória"
    },
    {
      nome: "EMA (European Medicines Agency)",
      pais: "Europa",
      descricao: "Agência europeia de medicamentos",
      url: "https://www.ema.europa.eu/",
      tipo: "Regulatória"
    },
    {
      nome: "ANVISA",
      pais: "Brasil",
      descricao: "Agência Nacional de Vigilância Sanitária",
      url: "https://www.gov.br/anvisa/",
      tipo: "Regulatória"
    },
    {
      nome: "NIH (National Institutes of Health)",
      pais: "Estados Unidos",
      descricao: "Instituto Nacional de Saúde",
      url: "https://www.nih.gov/",
      tipo: "Pesquisa"
    },
    {
      nome: "FIOCRUZ",
      pais: "Brasil",
      descricao: "Fundação Oswaldo Cruz",
      url: "https://www.fiocruz.br/",
      tipo: "Pesquisa"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-blue-900">
                Farmácia & Pesquisa
              </div>
            </a>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-900 transition">
                Voltar
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Referências Científicas
          </h1>
          <p className="text-xl text-blue-100">
            Bases de dados, periódicos e recursos para pesquisa farmacêutica
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Periódicos */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-blue-900">
              Periódicos Científicos
            </h2>
          </div>
          <p className="text-gray-700 mb-8">
            Os principais periódicos internacionais que publicam pesquisas em farmacologia, descoberta de fármacos e desenvolvimento de medicamentos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {periodicos.map((periodico, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {periodico.nome}
                </h3>
                <p className="text-gray-600 mb-3">{periodico.foco}</p>
                <p className="text-sm text-gray-500 mb-4">ISSN: {periodico.issn}</p>
                <a
                  href={periodico.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  Acessar <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Bases de Dados */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-blue-900">
              Bases de Dados Científicas
            </h2>
          </div>
          <p className="text-gray-700 mb-8">
            Acesse as principais bases de dados para buscar artigos, compostos químicos, ensaios clínicos e informações sobre medicamentos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basesdados.map((base, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-blue-900">
                    {base.nome}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {base.tipo}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{base.descricao}</p>
                <a
                  href={base.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm"
                >
                  Acessar <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Organizações e Agências */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-blue-900">
              Organizações e Agências
            </h2>
          </div>
          <p className="text-gray-700 mb-8">
            Agências regulatórias e institutos de pesquisa que definem padrões e financiam pesquisas em farmacologia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizacoes.map((org, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {org.nome}
                    </h3>
                    <p className="text-sm text-gray-500">{org.pais}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {org.tipo}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{org.descricao}</p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  Visitar <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Estatísticas */}
        <section className="bg-blue-50 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Dados sobre Desenvolvimento de Medicamentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">US$ 1-2B</p>
              <p className="text-gray-700">Custo médio de desenvolvimento</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">10-15</p>
              <p className="text-gray-700">Anos de desenvolvimento</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">~10%</p>
              <p className="text-gray-700">Taxa de sucesso</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">US$ 238B</p>
              <p className="text-gray-700">Investimento anual em P&D (2021)</p>
            </div>
          </div>
        </section>

        {/* Fases dos Ensaios Clínicos */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Fases dos Ensaios Clínicos
          </h2>
          <div className="space-y-4">
            {[
              {
                fase: "Fase I",
                objetivo: "Segurança e dosagem",
                duracao: "1-2 anos",
                participantes: "20-100 voluntários saudáveis"
              },
              {
                fase: "Fase II",
                objetivo: "Eficácia e efeitos colaterais",
                duracao: "2-3 anos",
                participantes: "100-500 pacientes"
              },
              {
                fase: "Fase III",
                objetivo: "Eficácia e monitoramento",
                duracao: "2-4 anos",
                participantes: "1.000-5.000 pacientes"
              },
              {
                fase: "Fase IV",
                objetivo: "Pós-comercialização",
                duracao: "Contínuo",
                participantes: "Milhões de usuários"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Fase</p>
                    <p className="text-lg font-bold text-blue-900">{item.fase}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Objetivo</p>
                    <p className="text-lg font-semibold text-gray-900">{item.objetivo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duração</p>
                    <p className="text-lg font-semibold text-gray-900">{item.duracao}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Participantes</p>
                    <p className="text-lg font-semibold text-gray-900">{item.participantes}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer aprofundar seus conhecimentos?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Explore nossos recursos de pesquisa e descubra as oportunidades na farmacologia moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/descobertas">
              <a className="inline-block bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition">
                Ver Descobertas Históricas
              </a>
            </Link>
            <Link href="/recursos">
              <a className="inline-block bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 transition">
                Acessar Recursos
              </a>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Farmácia & Pesquisa</h3>
              <p className="text-gray-400">
                Explorando o papel do farmacêutico na pesquisa científica e desenvolvimento de medicamentos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/"><a className="hover:text-white transition">Início</a></Link></li>
                <li><Link href="/descobertas"><a className="hover:text-white transition">Descobertas</a></Link></li>
                <li><Link href="/referencias"><a className="hover:text-white transition">Referências</a></Link></li>
                <li><Link href="/recursos"><a className="hover:text-white transition">Recursos</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                📧 contato@unipacaimores.com.br<br/>
                📱 +55 (33) 99989-8904<br/>
                📍 Aimorés, MG, Brasil
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AlfaUnipac Aimorés. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
