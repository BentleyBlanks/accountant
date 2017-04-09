#include "ofApp.h"

float calculate(float money)
{
    if(money <= 0.0)
        return -1.0;

    // ʵ��
    const float X = money;
    // Ӧ��
    float T;

    // 0~1333
    T = X;

    if(T > 1333.33f)
    {
        // 1333~6666
        T = (X - 160.0f) / 0.88f;
        if(T > 6666.66f)
        {
            // 6666~30000
            T = X / 0.904f;
            if(T > 30000.0f)
            {
                // 30000~43006.98
                T = X / 0.8758268f;
                if(T > 43006.98f)
                {
                    // 43006.98-100000-infinity
                    T = (X - 2000.0f) / 0.82932273f;
                    return T;
                }
                return T;
            }
            return T;
        }
        return T;
    }
    return T;
}

//--------------------------------------------------------------
void ofApp::setup()
{
    gui.setup();

    Ӧ�� = 0.0;
    ��˰ = 0.0;
    ��ֵ˰ = 0.0;
    ����˰ = 0.0;
}

//--------------------------------------------------------------
void ofApp::update()
{

}

//--------------------------------------------------------------
void ofApp::draw()
{
    gui.begin();

    //ImGui::Begin("Accountant");

    if(ImGui::BeginMenuBar())
    {
        if(ImGui::BeginMenu("About"))
        {
            ImGui::MenuItem("About", NULL);
        }
        ImGui::EndMenuBar();
    }

    if(ImGui::InputFloat("Input", &ʵ��, 0.1f))
    {

    }

    if(ImGui::Button("Calculate"))
    {
        Ӧ�� = calculate(ʵ��);
    }

    ImGui::Text("Result: %f", Ӧ��);

    //ImGui::End();

    gui.end();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key)
{

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key)
{

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y)
{

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button)
{

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button)
{

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button)
{

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y)
{

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y)
{

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h)
{

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg)
{

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo)
{

}
