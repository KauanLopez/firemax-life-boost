import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O FireMax é seguro?",
      answer: "Sim, o FireMax é 100% natural e seguro. Todos os ingredientes são aprovados pela ANVISA e passaram por rigorosos testes de qualidade. Não há efeitos colaterais conhecidos quando usado conforme as instruções."
    },
    {
      question: "Tem efeitos colaterais?",
      answer: "Não foram relatados efeitos colaterais com o uso do FireMax. Por ser uma fórmula completamente natural, é muito bem tolerado. Porém, se você tem alguma condição médica específica, consulte seu médico antes do uso."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários percebe os primeiros resultados entre 7 a 15 dias. Para resultados completos e duradouros, recomendamos o uso contínuo por 30 dias. Cada organismo responde de forma única."
    },
    {
      question: "Qual a garantia?",
      answer: "Oferecemos garantia total de 90 dias. Se você não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas, sem burocracia. Sua satisfação é nossa prioridade."
    },
    {
      question: "Em quanto tempo recebo meu produto?",
      answer: "Para pagamentos aprovados via PIX ou cartão, o envio ocorre em 24h úteis. A entrega varia de 3 a 7 dias úteis dependendo da sua região. Você recebe o código de rastreamento por email e WhatsApp."
    },
    {
      question: "Posso tomar com outros medicamentos?",
      answer: "Como o FireMax é natural, geralmente não há interações. Porém, se você toma medicamentos controlados, recomendamos consultar seu médico antes do uso para total segurança."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-fire">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Esclarecemos as principais dúvidas sobre o FireMax
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="mb-4 bg-card border-border hover:border-fire-orange/50 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
              >
                <h3 className="text-lg font-bold text-gold pr-4">
                  {faq.question}
                </h3>
                <span className={`text-2xl text-fire-orange transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-fire-orange/10 border-fire-orange/30">
            <p className="text-lg mb-4 text-foreground">
              <strong>Ainda tem dúvidas?</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Nossa equipe está pronta para te ajudar via WhatsApp
            </p>
            <div className="inline-flex items-center gap-2 text-fire-orange font-bold">
              <span className="text-xl">📱</span>
              <span>(11) 99999-9999</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;