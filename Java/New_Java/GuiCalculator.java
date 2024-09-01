import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GuiCalculator {

    public static void main(String[] args) {
        JFrame frame = new JFrame("Calculator");
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 4));
        
        JTextField display = new JTextField();
        panel.add(display);
        
        String[] buttons = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
        };

        for (String text : buttons) {
            JButton button = new JButton(text);
            button.addActionListener(new ButtonClickListener(display, text));
            panel.add(button);
        }

        frame.add(panel, BorderLayout.CENTER);
        frame.setSize(300, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    static class ButtonClickListener implements ActionListener {
        private final JTextField display;
        private final String text;

        ButtonClickListener(JTextField display, String text) {
            this.display = display;
            this.text = text;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            String currentText = display.getText();
            if (text.equals("=")) {
                try {
                    double result = evaluate(currentText);
                    display.setText(String.valueOf(result));
                } catch (Exception ex) {
                    display.setText("Error");
                }
            } else {
                display.setText(currentText + text);
            }
        }

        private double evaluate(String expression) {
            // Basic implementation of expression evaluation (only for simple expressions)
            return new Object() {
                int pos = -1, ch;

                void nextChar() {
                    ch = (++pos < expression.length()) ? expression.charAt(pos) : -1;
                }

                boolean eat(int charToEat) {
                    while (ch == ' ') nextChar();
                    if (ch == charToEat) {
                        nextChar();
                        return true;
                    }
                    return false;
                }

                double parse() {
                    nextChar();
                    double x = parseExpression();
                    if (pos < expression.length()) throw new RuntimeException("Unexpected: " + (char) ch);
                    return x;
                }

                double parseExpression() {
                    double x = parseTerm();
                    for (;;) {
                        if (eat('+')) x += parseTerm();
                        else if (eat('-')) x -= parseTerm();
                        else return x;
                    }
                }

                double parseTerm() {
                    double x = parseFactor();
                    for (;;) {
                        if (eat('*')) x *= parseFactor();
                        else if (eat('/')) x /= parseFactor();
                        else return x;
                    }
                }

                double parseFactor() {
                    if (eat('+')) return parseFactor();
                    if (eat('-')) return -parseFactor();

                    double x;
                    int startPos = this.pos;
                    if (eat('(')) {
                        x = parseExpression();
                        eat(')');
                    } else if ((ch >= '0' && ch <= '9') || ch == '.') {
                        while ((ch >= '0' && ch <= '9') || ch == '.') nextChar();
                        x = Double.parseDouble(expression.substring(startPos, this.pos));
                    } else {
                        throw new RuntimeException("Unexpected: " + (char) ch);
                    }

                    return x;
                }
            }.parse();
        }
    }
}
