import React from 'react';
import { Card } from '@/components/ui/card';

const PaymentSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-gold">
            Formas de Pagamento Seguras e Flexíveis
          </h2>
          <p className="text-lg text-muted-foreground">
            Facilitamos ao máximo para você começar sua transformação hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* PIX */}
          <Card className="p-6 text-center bg-muted border-fire-orange/20 hover:border-fire-orange/50 transition-all">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3 text-fire-gold">PIX</h3>
            <p className="text-foreground mb-4">
              Pagamento instantâneo e aprovação imediata
            </p>
            <div className="bg-fire-orange/10 p-3 rounded-lg">
              <p className="text-sm font-bold text-fire-orange">
                💥 5% DE DESCONTO EXTRA
              </p>
            </div>
          </Card>

          {/* Boleto */}
          <Card className="p-6 text-center bg-muted border-fire-orange/20 hover:border-fire-orange/50 transition-all">
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="text-xl font-bold mb-3 text-fire-gold">Boleto Bancário</h3>
            <p className="text-foreground mb-4">
              Pague em qualquer banco, lotérica ou app
            </p>
            <div className="bg-fire-orange/10 p-3 rounded-lg">
              <p className="text-sm font-bold text-fire-orange">
                Prazo de 3 dias úteis
              </p>
            </div>
          </Card>

          {/* Cartão */}
          <Card className="p-6 text-center bg-muted border-fire-orange/20 hover:border-fire-orange/50 transition-all">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-3 text-fire-gold">Cartão de Crédito</h3>
            <p className="text-foreground mb-4">
              Parcelamento em até 12x sem juros
            </p>
            <div className="bg-fire-orange/10 p-3 rounded-lg">
              <p className="text-sm font-bold text-fire-orange">
                Aprovação instantânea
              </p>
            </div>
          </Card>
        </div>

        {/* Payment Details */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-background border-fire-gold/30">
            <h3 className="text-xl font-bold mb-6 text-center text-fire-gold">
              💳 Aceitamos Todos os Cartões
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card brands */}
              <div>
                <h4 className="font-bold mb-4 text-foreground">Bandeiras Aceitas:</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-fire-orange/10 px-3 py-1 rounded text-fire-orange">VISA</span>
                  <span className="bg-fire-orange/10 px-3 py-1 rounded text-fire-orange">MASTERCARD</span>
                  <span className="bg-fire-orange/10 px-3 py-1 rounded text-fire-orange">ELO</span>
                  <span className="bg-fire-orange/10 px-3 py-1 rounded text-fire-orange">AMERICAN EXPRESS</span>
                  <span className="bg-fire-orange/10 px-3 py-1 rounded text-fire-orange">HIPERCARD</span>
                </div>
              </div>

              {/* Installments */}
              <div>
                <h4 className="font-bold mb-4 text-foreground">Parcelamento:</h4>
                <ul className="space-y-2 text-foreground">
                  <li>✅ <strong>1x</strong> - Sem juros</li>
                  <li>✅ <strong>2x a 6x</strong> - Sem juros</li>
                  <li>✅ <strong>7x a 12x</strong> - Juros da operadora</li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-fire-orange/10 px-6 py-3 rounded-lg">
                <span className="text-2xl">🔒</span>
                <span className="font-bold text-fire-orange">
                  Checkout 100% Seguro - Certificado SSL
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;