import React from 'react';
import { Card } from '@/components/ui/card';
import { FireMaxButton } from './FireMaxButton';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-background border-2 border-fire-gold/50 text-center">
            <div className="mb-8">
              {/* Guarantee Seal */}
              <div className="inline-block relative">
                <div className="w-32 h-32 mx-auto mb-6 bg-fire-gold rounded-full flex items-center justify-center gold-glow">
                  <div className="text-center text-black">
                    <div className="text-2xl font-black">90</div>
                    <div className="text-sm font-bold">DIAS</div>
                    <div className="text-xs font-bold">GARANTIA</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-fire-red text-white text-xs px-2 py-1 rounded-full font-bold">
                  100%
                </div>
              </div>
            </div>

            <h2 className="text-section-title mb-6 text-fire">
              Política de Satisfação
            </h2>
            
            <p className="text-xl mb-8 text-foreground leading-relaxed">
              <strong className="text-fire-gold">
                "Sua satisfação é nossa prioridade. Confiamos na qualidade do FireMax"
              </strong>
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gold">
                  🛡️ Nossa Promessa:
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">✅</span>
                    <span>90 dias completos para testar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">✅</span>
                    <span>Devolução de 100% do valor pago</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">✅</span>
                    <span>Sem perguntas embaraçosas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">✅</span>
                    <span>Processo simples e rápido</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-gold">
                  📞 Como Solicitar:
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">1️⃣</span>
                    <span>Entre em contato via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">2️⃣</span>
                    <span>Informe seus dados de compra</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">3️⃣</span>
                    <span>Estorno processado em até 5 dias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-orange mr-2 mt-1">4️⃣</span>
                    <span>Dinheiro de volta na sua conta</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-fire-orange/10 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold mb-3 text-fire-orange">
                💎 Nossa Confiança no Produto
              </h3>
              <p className="text-foreground leading-relaxed">
                Temos <strong>confiança</strong> na qualidade e formulação do FireMax. 
                Milhares de homens já escolheram nosso produto para auxiliar em sua rotina de bem-estar. 
                Sua satisfação é nossa maior prioridade.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Experimente FireMax com tranquilidade e segurança.
              </p>
              
              <FireMaxButton variant="fire" size="xl" className="animate-pulse">
                💎 QUERO EXPERIMENTAR O FIREMAX
              </FireMaxButton>
              
              <p className="text-sm text-muted-foreground">
                ✅ Checkout 100% seguro • 🚚 Frete grátis • 📱 Suporte via WhatsApp
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;