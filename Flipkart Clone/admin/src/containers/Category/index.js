import React, { useEffect, useState } from "react";
import Layout from "../../components/Layouts";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCategory, getAllCategory } from "../../actions";
import Inputs from "../../components/UI/Inputs";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");

  const handleClose = () => {
    
    // const form = new FormData();

    // form.append("name", categoryName);
    // form.append("parentId", parentCategoryId);

    const form = {
        name: categoryName,
        parentId: parentCategoryId
    }
    dispatch(addNewCategory(form))

    setShow(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });

      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Inputs
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <select className="form-control" onChange={(e)=> setParentCategoryId(e.target.value)}>
            <option>Select Category</option>
            {createCategoryList(category.categories).map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Category;
