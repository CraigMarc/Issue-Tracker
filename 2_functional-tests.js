const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

suite('tests for routes', function() {
/*#1*/
test('Create an issue with every field: POST request ', function (done) {
chai
.request(server)
.keepOpen()
.post('/api/issues/projects')
.send({issue_title: 'title', issue_text: 'text', created_by: 'cm', assigned_to: 'cm', status_text: 'text 2', open: true})
    .end(function(err, res) {
      assert.equal(res.status, 200)
      assert.equal(res.body.issue_title, 'title')
      assert.equal(res.body.issue_text, 'text')
      assert.equal(res.body.created_by, 'cm')
      assert.equal(res.body.assigned_to, 'cm')
      assert.equal(res.body.status_text, 'text 2')
      assert.equal(res.body.open, true)
      
    done()
    })
  })
/*test2*/

test("Create an issue with only required fields: POST request", function (done) {
        chai
          .request(server)
          .keepOpen()
          .post("/api/issues/projects")
          .send({
            issue_title: "Issue",
            issue_text: "Functional Test",
            created_by: "fCC",
            assigned_to: "",
            status_text: "",
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.issue_title, "Issue");
            assert.equal(res.body.created_by, "fCC");
            assert.equal(res.body.issue_text, "Functional Test");
            assert.equal(res.body.assigned_to, "");
            assert.equal(res.body.status_text, "");
            done();
          });
      });
/*test3*/
  
test('Create an issue with missing required fields: POST request ', function (done) {
chai
.request(server)
.get('/api/issues/projects')
.send({issue_title: '', issue_text: '', created_by: '', assigned_to: 'cm', status_text: 'text 2', open: true})
    .end(function(err, res) {
      assert.equal(res.status, 200)
      assert.equal(res.body.error, 'required field(s) missing');
    done()
    })
  })

  /*test4*/
  
  
  test('View issues on a project: GET request', function (done) {
chai
.request(server)
.keepOpen()
.get('/api/issues/project')

    .end(function(err, res) {
      assert.equal(res.status, 200)
      assert.equal(res.body.length, 3)
    done()
    })
  })

  /*test5*/
  
  test('View issues on a project with multiple filters: GET request ', function (done) {
chai
.request(server)
.keepOpen()
.get('/api/issues/filter')
    .end(function(err, res) {
      assert.equal(res.status, 200)
      assert.equal(res.body[0], {
            _id: "6469424a05237187f5bfdf34",
              issue_title: "filter title",
              issue_text: "filter text",
              created_on: "2023-05-20T21:57:30.858Z",
              updated_on: "2023-05-20T21:57:30.859Z",
              created_by: "cm",
              assigned_to: "",
              open: true,
              status_text: "",})
           
    done()
    })
  })
/*test6*/

test("Update one field on an issue: PUT request", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: "64681550988b4eac7931b519",
            issue_title: "put test"
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.result,           "successfully updated");
            assert.equal(res.body._id, "64681550988b4eac7931b519");
            
            done();
          });
      });
/*test7*/
 test("Update multiple fields on an issue: PUT request", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: "64681550988b4eac7931b519",
            issue_title: "put test",
            issue_text: "put test",
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.result,           "successfully updated");
            assert.equal(res.body._id, "64681550988b4eac7931b519");
            
            done();
          });
      }); 
/*test8*/
 test("Update an issue with missing _id: PUT", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: ""
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error,           "missing _id");
            
            done();
          });
      }); 

/*test9*/
 test("update an issue with an invalid _id: PUT", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: "646519"
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error,           "could not update");
            
            done();
          });
      }); 

/*test10*/
  test("Delete an issue: DELETE request to", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: "6469599a203dda466817bffb"
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.result,                         "successfully deleted");
           
            done();
          });
      }); 
/*test11*/

 test("Delete an issue with an invalid _id: DELETE", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: "6469"
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error,                         "could not delete");
           
            done();
          });
      }); 
/*test12*/
  test("Delete an issue with missing _id", function (done) {
        chai
          .request(server)
          .keepOpen()
          .put("/api/issues/projects")
          .send({
            _id: ""
            
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error,                         "missing _id");
           
            done();
          });
      }); 




  
})
  
})






  

