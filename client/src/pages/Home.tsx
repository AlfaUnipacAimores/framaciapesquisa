import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Beaker, BookOpen, FileText, LogOut, Microscope, Zap, MapPin, Phone, Mail, Users, Award, Heart, Lightbulb, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

/**
 * Design Philosophy: Modernismo Científico com Austeridade Elegante
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Paleta: Branco, Cinza Carvão, Azul Marinho, Verde Menta
 * - Layout: Assimétrico com espaçamento generoso
 * - Animações: Transições suaves e reveladoras
 */

// Dados dos alunos
const ALUNOS = [
  "Camilly Ferreira de Sousa",
  "Carlos Eduardo Silva Andrade",
  "Vanessa Tomaz Coutinho",
  "Quezia de Oliveira Souza",
  "Maria Jackeline Matos Silva de Andrade",
  "Ludimila Caetano da Silva",
  "Ana Lídia Costa de Lima",
  "Thayná Strelow",
  "Leandro Teixeira"
];

const COORDENADOR = "Juliano Kacio Zorzal";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <Beaker className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-blue-900">
              Farmácia & Pesquisa
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#evolucao" className="text-gray-700 hover:text-blue-900 transition">
              Evolução
            </a>
            <a href="#farmaceutico" className="text-gray-700 hover:text-blue-900 transition">
              O Farmacêutico
            </a>
            <a href="#pesquisa" className="text-gray-700 hover:text-blue-900 transition">
              Pesquisa
            </a>
            <a href="#impacto" className="text-gray-700 hover:text-blue-900 transition">
              Impacto
            </a>
            <a href="#equipe" className="text-gray-700 hover:text-blue-900 transition">
              Equipe
            </a>
            <Link href="/recursos" className="text-gray-700 hover:text-blue-900 transition">
              Recursos
            </Link>
            <Link href="/referencias" className="text-gray-700 hover:text-blue-900 transition">
              Referências
            </Link>
            <Link href="/links" className="text-gray-700 hover:text-blue-900 transition">
              Links
            </Link>
            {user ? (
              <div className="flex gap-3 items-center">
                <span className="text-sm text-gray-600">{user.name}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => logout()}
                  className="flex gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                className="bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => (window.location.href = getLoginUrl())}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Texto Hero */}
          <div className="px-6 md:px-12 py-20 md:py-32 flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                O Farmacêutico na Pesquisa Científica
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Explorando a evolução tecnológica, o papel vital do profissional farmacêutico e o impacto transformador da Inteligência Artificial no desenvolvimento de medicamentos que salvam vidas.
              </p>
              <div className="flex gap-4">
                <a href="#evolucao">
                  <Button className="bg-blue-900 text-white hover:bg-blue-800 px-6 py-3">
                    Explorar Pesquisa
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#pesquisa">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative h-96 md:h-screen order-1 lg:order-2 overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/hero-pharmaceutical-research-NMNPsBzgNY2rFtDFytVxHp.webp"
              alt="Pesquisa Farmacêutica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white opacity-20" />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Seção Contexto Tecnológico */}
      <section id="evolucao" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Evolução Tecnológica na Pesquisa Farmacêutica
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A transição do compartilhamento informal de conhecimento para a era da Inteligência de Dados representa uma mudança paradigmática fundamental na forma como a ciência farmacêutica avança.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Era 1 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Passado: Compartilhamento Informal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Plataformas como GeoCities e fóruns especializados permitiam o compartilhamento de conhecimento em comunidades de interesse, com dados dispersos e baixa indexação.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Comunidades online descentralizadas</li>
                  <li>• Acesso limitado a informações</li>
                  <li>• Falta de padronização</li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-6 w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent hidden md:block" />
            </div>

            {/* Era 2 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Presente: Indexação Estruturada
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Repositórios científicos como MDPI oferecem indexação rigorosa, acesso aberto, interconectividade global e curadoria de dados de alta qualidade.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Acesso aberto a pesquisas</li>
                  <li>• Indexação por pares revisados</li>
                  <li>• Conectividade global</li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-6 w-1 h-12 bg-gradient-to-b from-blue-900 to-transparent hidden md:block" />
            </div>

            {/* Era 3 */}
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Futuro: Inteligência Artificial
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IA processa dados em larga escala, prediz moléculas, automatiza triagens e oferece suporte à decisão clínica, revolucionando o desenvolvimento de medicamentos.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Processamento de big data</li>
                  <li>• Predição molecular</li>
                  <li>• Automação inteligente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Image */}
          <div className="mt-16 rounded-lg overflow-hidden border border-gray-200">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/timeline-molecular-evolution-E56fBwZBDRi8VnP3aShu6Y.webp"
              alt="Evolução Tecnológica"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Seção O Farmacêutico */}
      <section id="farmaceutico" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="rounded-lg overflow-hidden border border-gray-200 order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/pharmacist-research-lab-Ndqbjce4gp7FRn8CibKgAq.webp"
                alt="Farmacêutico em Laboratório"
                className="w-full h-auto"
              />
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O Papel do Farmacêutico
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O farmacêutico é um agente central na pesquisa científica, atuando em múltiplas frentes: desde a descoberta de novas moléculas até os ensaios clínicos e vigilância sanitária.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Pesquisa e Desenvolvimento</h3>
                    <p className="text-gray-700">
                      Participação ativa na síntese de moléculas, testes de eficácia, otimização de fármacos e validação de novos compostos químicos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ensaios Clínicos</h3>
                    <p className="text-gray-700">
                      Supervisão de protocolos, análise de dados, garantia de conformidade regulatória e segurança do paciente em todas as fases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Inovação Tecnológica</h3>
                    <p className="text-gray-700">
                      Adoção de bioinformática, modelagem molecular, big data e IA para acelerar descobertas e reduzir tempo de desenvolvimento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-blue-900 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Indústria Farmacêutica</h3>
                    <p className="text-gray-700">
                      Controle de qualidade, garantia de boas práticas de fabricação e conformidade com regulamentações internacionais.
                    </p>
                  </div>
                </div>
              </div>

              <a href="#pesquisa">
                <Button className="mt-8 bg-blue-900 text-white hover:bg-blue-800 px-6 py-3">
                  Conheça Mais Sobre a Profissão
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Seção Eixos de Pesquisa */}
      <section id="pesquisa" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eixos Temáticos de Pesquisa
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Compreender a pesquisa farmacêutica exige explorar múltiplas dimensões do desenvolvimento de medicamentos, desde a química molecular até o impacto social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Beaker className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ciclo de Vida do Medicamento
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desde a concepção da molécula até os ensaios clínicos, pós-comercialização e vigilância sanitária. Cada etapa é crucial para garantir eficácia e segurança.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Descoberta e síntese</p>
                <p>• Testes pré-clínicos</p>
                <p>• Ensaios clínicos (Fases I-IV)</p>
                <p>• Aprovação regulatória</p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Microscope className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ensaios Clínicos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exploração das diferentes fases dos ensaios clínicos e o papel crítico do farmacêutico em cada etapa, garantindo segurança e eficácia.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Fase I: Segurança e dosagem</p>
                <p>• Fase II: Eficácia e efeitos colaterais</p>
                <p>• Fase III: Confirmação de eficácia</p>
                <p>• Fase IV: Monitoramento pós-comercialização</p>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Heart className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Impacto Social
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como a pesquisa farmacêutica salva vidas, promove bem-estar coletivo e transforma a saúde pública em nível global.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Redução de mortalidade</p>
                <p>• Melhoria da qualidade de vida</p>
                <p>• Acesso equitativo a medicamentos</p>
                <p>• Prevenção de doenças</p>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition">
              <Lightbulb className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Inovação e IA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Uso de algoritmos para acelerar descoberta de fármacos, reduzir custos e melhorar eficácia através de machine learning e análise de dados.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Predição molecular</p>
                <p>• Triagem de compostos</p>
                <p>• Análise de big data</p>
                <p>• Otimização de processos</p>
              </div>
            </Card>
          </div>

          {/* Research Data Image */}
          <div className="mt-16 rounded-lg overflow-hidden border border-gray-200">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/clinical-trials-data-9uLnKvK4SYRsZW6z3r9wx6.webp"
              alt="Dados de Pesquisa Clínica"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Seção Inovação e Breakthrough */}
      <section id="impacto" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Inovação e Descobertas
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A pesquisa farmacêutica não é apenas uma disciplina científica—é uma missão humanitária que transforma vidas através da inovação contínua e do compromisso com a excelência.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Exemplos de Descobertas Importantes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    De antibióticos revolucionários (Penicilina) a terapias genéticas de ponta, o trabalho do farmacêutico tem moldado a história da medicina moderna. Cada descoberta representa anos de pesquisa dedicada.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ferramentas Atuais
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bioinformática, modelagem molecular, big data e IA permitem que os pesquisadores trabalhem com velocidade e precisão sem precedentes, reduzindo o tempo de desenvolvimento de 10-15 anos para 5-7 anos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    O Futuro da Farmácia
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Medicamentos personalizados, terapias regenerativas, tratamentos preventivos baseados em IA e medicina de precisão estão redefinindo o que é possível no cuidado à saúde.
                  </p>
                </div>
              </div>

              <a href="/recursos">
                <Button className="mt-8 bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-3">
                  Descubra Mais Inovações
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Imagem */}
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029735165/ZriG5Uod7PW2MsiTuCRe5n/innovation-breakthrough-AVuoQptWtyL8qwXf2RRpDL.webp"
                alt="Inovação e Descoberta"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Seção Equipe e Alunos */}
      <section id="equipe" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Este trabalho foi desenvolvido pelos alunos do 1º e 2º período do curso de Farmácia da AlfaUnipac Aimorés, sob orientação da Professora Aline R. Loss.
            </p>
          </div>

          {/* Coordenador */}
          <div className="mb-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Coordenador do Curso</h3>
            </div>
            <p className="text-xl text-blue-900 font-semibold">{COORDENADOR}</p>
            <p className="text-gray-700 mt-2">Coordenação do Curso de Farmácia - AlfaUnipac Aimorés</p>
          </div>

          {/* Alunos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-900" />
              Alunos do 1º e 2º Período de 2026
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ALUNOS.map((aluno, index) => (
                <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{aluno}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Junte-se à Comunidade Científica
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Descubra como o curso de Farmácia da Faculdade AlfaUnipac prepara profissionais para liderar a inovação em pesquisa farmacêutica e transformar vidas através da ciência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.unipacaimores.com.br/cursos/farmacia" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 font-semibold w-full">
                Saiba Mais Sobre o Curso
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B5533999898904&text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Farmácia%20da%20AlfaUnipac%20Aimorés" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-3 font-semibold w-full">
                <MessageCircle className="mr-2 w-4 h-4" />
                Contato via WhatsApp
              </Button>
            </a>
            <a href="/recursos">
              <Button variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-3 font-semibold w-full">
                <FileText className="mr-2 w-4 h-4" />
                Acessar Recursos
              </Button>
            </a>
            <a href="/descobertas">
              <Button variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-3 font-semibold w-full">
                <Award className="mr-2 w-4 h-4" />
                Descobertas Históricas
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Informações Institucionais */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Faculdade AlfaUnipac</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-700">Rua Pedro Nolasco, 1376</p>
                    <p className="text-gray-700">Centro, Aimorés - MG, CEP: 35.200-000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <a href="tel:+5533999898904" className="text-blue-900 hover:underline">
                      +55 (33) 99989-8904
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:farmacia.aimores@alfaunipac.com.br" className="text-blue-900 hover:underline">
                      farmacia.aimores@alfaunipac.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Siga-nos nas Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.facebook.com/UnipacAimores/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 flex gap-2">
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </Button>
                </a>
                <a href="https://www.instagram.com/unipacaimores/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 flex gap-2">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Button>
                </a>
                <a href="https://br.linkedin.com/in/p%C3%B3s-gradua%C3%A7%C3%A3o-unipac-aimor%C3%A9s-04094990" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 flex gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://www.youtube.com/c/FaculdadeAlfaUnipac" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 flex gap-2">
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </Button>
                </a>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Contato Direto</h4>
                <a href="https://api.whatsapp.com/send?phone=%2B5533999898904&text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Farmácia" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700 flex gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Conversar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Sobre Este Site</h3>
              <p className="text-sm leading-relaxed">
                Memorial descritivo digital sobre o papel do farmacêutico na pesquisa científica e desenvolvimento de medicamentos. Desenvolvido pelos alunos do curso de Farmácia da AlfaUnipac Aimorés.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Navegação Rápida</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#evolucao" className="hover:text-white transition">Evolução Tecnológica</a></li>
                <li><a href="#farmaceutico" className="hover:text-white transition">O Farmacêutico</a></li>
                <li><a href="#pesquisa" className="hover:text-white transition">Pesquisa</a></li>
                <li><a href="#impacto" className="hover:text-white transition">Impacto</a></li>
                <li><a href="#equipe" className="hover:text-white transition">Equipe</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Instituição</h3>
              <p className="text-sm">
                Faculdade AlfaUnipac<br />
                Curso de Farmácia<br />
                Aimorés, MG<br />
                <br />
                <strong>Professora Responsável:</strong> Aline R. Loss<br />
                <strong>Disciplina:</strong> Desenvolvimento Profissional - Vida e Carreira
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 O Farmacêutico na Pesquisa Científica. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">Desenvolvido pelos alunos do curso de Farmácia - AlfaUnipac Aimorés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
