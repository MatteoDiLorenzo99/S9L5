import React, { useState } from "react";  // Aggiungi useState qui
import { Card, Button, Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";

const ProfileComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark schedaprincipale"
      style={{ minHeight: "100vh", padding: "1rem" }}
    >
      <Card
        style={{ maxWidth: "30rem", width: "100%" }}
        className="bg-secondary text-light border-0"
      >
        <Card.Header>
          <h1 className="text-white text-center" style={{ textAlign: "left" }}>Edit Profile</h1>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-center align-items-start">
            {/* Colonna sinistra: Immagine del profilo */}
            <div
              className="position-relative bg-success mx-auto mb-4"
              style={{
                width: "9rem",
                height: "9rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="position-absolute bg-dark rounded-circle d-flex justify-content-center align-items-center"
                style={{ bottom: "0.5rem", right: "0.5rem", width: "2rem", height: "2rem" }}
              >
                <span role="img" aria-label="edit" className="text-white">
                  ✏️
                </span>
              </div>
            </div>

            {/* Colonna destra: Contenuto del profilo */}
            <div className="ml-4" id="colonnadestra">
              {/* Title Input */}
              <Form.Group className="mb-4">
                <Form.Label className="text-muted" id="Profile">Profile Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Strive student"
                  className="bg-dark text-white border-secondary"
                  id="Placeholder"
                />
              </Form.Group>

              {/* Language Selector */}
              <Form.Group className="mb-4">
                <Form.Label className=" text-white">Language:</Form.Label>
                <InputGroup>
                  <div className="dropdown-wrapper w-30">
                    <DropdownButton
                      variant="dark"
                      title={selectedLanguage} // Cambia dinamicamente in base alla selezione
                      className="dropdown-custom"
                    >
                      <Dropdown.Item onClick={() => handleSelectLanguage("English")}>
                        English
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelectLanguage("Spanish")}>
                        Spanish
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelectLanguage("French")}>
                        French
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </InputGroup>
              </Form.Group>

              <hr></hr>

              {/* Maturity Settings */}
              <Form.Group className="mb-4">
  <Form.Label className="text-white" id="maturity">Maturity Settings</Form.Label>
  
  {/* Nuovo label tra il titolo e il testo sotto */}
  <Form.Label className="text-white" style={{ backgroundColor: '#6c757d', padding: '5px', borderRadius: '5px', display: 'block', width: '75%', fontSize: '15px' }}>
    ALL MATURITY SETTINGS
  </Form.Label>
  
  {/* Rimosso il checkbox, lasciato solo il testo */}
  <p className="text-light">Show titles of all maturity ratings for this profile</p>
  
  {/* Aumentato la dimensione del tasto */}
  <Button variant="outline-secondary" size="lg" className="mt-2 px-4">
    EDIT
  </Button>
</Form.Group>

              <hr></hr>
              {/* Autoplay Controls */}
              <Form.Group className="mb-4">
                <Form.Label className="text-white" id="maturity">Autoplay Controls</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Autoplay next episode in a series on all devices"
                  className="text-light custom-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  label="Autoplay previews while browsing on all devices"
                  className="text-light custom-checkbox"
                />
              </Form.Group>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="light" className="text-dark  custom-btn">
              SAVE
            </Button>
            <Button variant="outline-secondary  custom-btn">CANCEL</Button>
            <Button variant="outline-danger  custom-btn">DELETE PROFILE</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileComponent;
