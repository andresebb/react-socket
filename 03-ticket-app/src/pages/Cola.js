import React, { useContext, useEffect, useState } from "react";

import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

// const data = [
//   {
//     ticketNo: 39,
//     escritorio: 5,
//     agente: "Carlos Castro",
//   },
//   {
//     ticketNo: 38,
//     escritorio: 2,
//     agente: "Melissa Flores",
//   },
//   {
//     ticketNo: 37,
//     escritorio: 3,
//     agente: "Fernando Herrera",
//   },
//   {
//     ticketNo: 36,
//     escritorio: 3,
//     agente: "Fernando Herrera",
//   },
//   {
//     ticketNo: 35,
//     escritorio: 5,
//     agente: "Carlos Castro",
//   },
//   {
//     ticketNo: 34,
//     escritorio: 4,
//     agente: "Melissa Flores",
//   },
//   {
//     ticketNo: 33,
//     escritorio: 3,
//     agente: "Fernando Herrera",
//   },
// ];

export const Cola = () => {
  useHideMenu(true);
  const [tickets, setTickets] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("ticket-asignado", (data) => {
      setTickets(data);
    });
  }, [socket]);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 2)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 250, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano"> {item.agente}</Tag>,
                    <Tag color="magenta"> Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title> No. {item.numero}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(2)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.numero}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta"> {item.escritorio} </Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="volcano"> {item.agente} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
