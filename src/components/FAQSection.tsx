import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O FireMax é seguro?",
      answer: "Sim, o FireMax é um suplemento natural formulado seguindo boas práticas de fabricação. Todos os ingredientes são selecionados criteriosamente. Recomendamos consultar um profissional de saúde antes de iniciar qualquer suplementação."
    },
    {
      question: "Tem efeitos colaterais?",
      answer: "Não foram relatados efeitos adversos significativos com o uso do FireMax quando usado conforme orientado. Por ser uma fórmula natural, é geralmente bem tolerado. Caso tenha alguma condição médica específica, consulte seu médico."
    },
    {
      question: "Como devo usar o produto?",
      answer: "O FireMax pode ser usado conforme as instruções na embalagem. Recomendamos uso consistente para potencializar os benefícios. Os resultados podem variar entre indivíduos."
    },
    {
      question: "Qual a política de satisfação?",
      answer: "Oferecemos política de satisfação de 90 dias. Se você não estiver satisfeito com sua compra, entre em contato conosco através dos nossos canais de atendimento para verificar as condições de devolução."
    },
    {
      question: "Em quanto tempo recebo meu produto?",
      answer: "Para pagamentos aprovados via PIX ou cartão, o envio ocorre em até 2 dias úteis. A entrega varia de 5 a 15 dias úteis dependendo da sua região. Você recebe o código de rastreamento por email."
    },
    {
      question: "Posso usar com outros suplementos?",
      answer: "Como o FireMax é um suplemento natural, geralmente não há contraindicações. Porém, se você usa outros suplementos ou medicamentos, recomendamos consultar um profissional de saúde para orientação personalizada."
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
